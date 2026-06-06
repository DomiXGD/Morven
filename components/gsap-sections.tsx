"use client";

import { ReactNode, useCallback, useEffect, useRef } from "react";
import gsap from "gsap";

type GsapSectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function GsapSection({ id, children, className = "" }: GsapSectionProps) {
  return (
    <section id={id} className={`gsap-section ${className}`}>
      <div className="gsap-wrapper-outer">
        <div className="gsap-wrapper-inner">
          <div className="gsap-background">{children}</div>
        </div>
      </div>
    </section>
  );
}

type GsapSectionsContainerProps = {
  children: ReactNode;
};

export function GsapSectionsContainer({ children }: GsapSectionsContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<{
    currentIndex: number;
    animating: boolean;
    sections: HTMLElement[];
    outerWrappers: HTMLElement[];
    innerWrappers: HTMLElement[];
    backgrounds: HTMLElement[];
  }>({
    currentIndex: -1,
    animating: false,
    sections: [],
    outerWrappers: [],
    innerWrappers: [],
    backgrounds: []
  });

  const getScrollableParent = useCallback((target: EventTarget | null) => {
    if (!(target instanceof HTMLElement)) return null;

    let node: HTMLElement | null = target;

    while (node && node !== document.body) {
      const style = window.getComputedStyle(node);
      const overflowY = style.overflowY;
      const canScroll =
        (overflowY === "auto" || overflowY === "scroll") &&
        node.scrollHeight > node.clientHeight + 1;

      if (canScroll) {
        return node;
      }

      node = node.parentElement;
    }

    return null;
  }, []);

  const shouldAllowNestedScroll = useCallback(
    (target: EventTarget | null, deltaY: number) => {
      const scrollableParent = getScrollableParent(target);
      if (!scrollableParent) return false;

      const currentScrollTop = scrollableParent.scrollTop;
      const maxScrollTop = scrollableParent.scrollHeight - scrollableParent.clientHeight;

      if (deltaY > 0) {
        return currentScrollTop < maxScrollTop - 1;
      }

      return currentScrollTop > 1;
    },
    [getScrollableParent]
  );

  const gotoSection = useCallback((index: number, direction: number) => {
    const state = stateRef.current;
    const { backgrounds, innerWrappers, outerWrappers, sections } = state;

    if (sections.length === 0) return;

    const rawIndex = index;
    index = ((index % sections.length) + sections.length) % sections.length;
    if (index === state.currentIndex) return;

    const isWrapAround =
      (state.currentIndex === sections.length - 1 && rawIndex >= sections.length) ||
      (state.currentIndex === 0 && rawIndex < 0);

    state.animating = true;

    if (isWrapAround) {
      const tl = gsap.timeline({
        defaults: { duration: 0.9, ease: "power2.inOut" },
        onComplete: () => {
          state.animating = false;
        }
      });

      if (state.currentIndex >= 0) {
        const currentSection = sections[state.currentIndex];
        gsap.set(currentSection, { zIndex: 0 });
        tl.to(currentSection, { autoAlpha: 0, scale: 0.95, duration: 0.6 });
      }

      const newSection = sections[index];
      const newOuter = outerWrappers[index];
      const newInner = innerWrappers[index];
      const newBg = backgrounds[index];

      gsap.set(newOuter, { yPercent: 0 });
      gsap.set(newInner, { yPercent: 0 });
      gsap.set(newBg, { yPercent: 0 });
      gsap.set(newSection, { autoAlpha: 0, zIndex: 1, scale: 1.05 });

      tl.to(newSection, { autoAlpha: 1, scale: 1, duration: 0.8 }, 0.2);

      const animateElements = newSection.querySelectorAll(".gsap-animate-in");
      if (animateElements.length > 0) {
        tl.fromTo(
          animateElements,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            stagger: { each: 0.03, from: "start" }
          },
          0.4
        );
      }
    } else {
      const dFactor = direction === -1 ? -1 : 1;

      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => {
          state.animating = false;
        }
      });

      if (state.currentIndex >= 0) {
        const currentSection = sections[state.currentIndex];
        const currentBg = backgrounds[state.currentIndex];

        gsap.set(currentSection, { zIndex: 0 });
        tl.to(currentBg, { yPercent: -15 * dFactor }).set(currentSection, { autoAlpha: 0 });
      }

      const newSection = sections[index];
      const newOuter = outerWrappers[index];
      const newInner = innerWrappers[index];
      const newBg = backgrounds[index];

      gsap.set(newSection, { autoAlpha: 1, zIndex: 1 });

      tl.fromTo(
        [newOuter, newInner],
        {
          yPercent: (i: number) => (i ? -100 * dFactor : 100 * dFactor)
        },
        { yPercent: 0 },
        0
      ).fromTo(newBg, { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

      const animateElements = newSection.querySelectorAll(".gsap-animate-in");
      if (animateElements.length > 0) {
        tl.fromTo(
          animateElements,
          { autoAlpha: 0, yPercent: 80 * dFactor },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2.out",
            stagger: { each: 0.04, from: "random" }
          },
          0.2
        );
      }
    }

    state.currentIndex = index;

    const navLinks = document.querySelectorAll("[data-gsap-nav]");
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const sectionId = href?.slice(1);
      if (sectionId === sections[index].id) {
        link.classList.add("gsap-nav-active");
      } else {
        link.classList.remove("gsap-nav-active");
      }
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = Array.from(container.querySelectorAll<HTMLElement>(".gsap-section"));
    const outerWrappers = Array.from(container.querySelectorAll<HTMLElement>(".gsap-wrapper-outer"));
    const innerWrappers = Array.from(container.querySelectorAll<HTMLElement>(".gsap-wrapper-inner"));
    const backgrounds = Array.from(container.querySelectorAll<HTMLElement>(".gsap-background"));

    const state = stateRef.current;
    state.sections = sections;
    state.outerWrappers = outerWrappers;
    state.innerWrappers = innerWrappers;
    state.backgrounds = backgrounds;
    state.currentIndex = -1;
    state.animating = false;

    gsap.set(sections, { autoAlpha: 0, zIndex: 0 });
    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    gotoSection(0, 1);

    let touchStartY = 0;
    let touchStartTime = 0;
    let touchStartTarget: EventTarget | null = null;
    let touchScrollable: HTMLElement | null = null;
    let touchStartScrollTop = 0;

    const handleWheel = (event: WheelEvent) => {
      if (shouldAllowNestedScroll(event.target, event.deltaY)) {
        return;
      }

      event.preventDefault();
      if (state.animating) return;

      if (event.deltaY < 0) {
        gotoSection(state.currentIndex - 1, -1);
      } else if (event.deltaY > 0) {
        gotoSection(state.currentIndex + 1, 1);
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
      touchStartTime = Date.now();
      touchStartTarget = event.target;
      touchScrollable = getScrollableParent(event.target);
      touchStartScrollTop = touchScrollable?.scrollTop ?? 0;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (state.animating) return;

      const touchEndY = event.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      const elapsed = Date.now() - touchStartTime;

      if (touchScrollable && touchScrollable.scrollTop !== touchStartScrollTop) {
        return;
      }

      if (shouldAllowNestedScroll(touchStartTarget, deltaY)) {
        return;
      }

      if (Math.abs(deltaY) > 50 && elapsed < 500) {
        if (deltaY > 0) {
          gotoSection(state.currentIndex + 1, 1);
        } else {
          gotoSection(state.currentIndex - 1, -1);
        }
      }
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (state.animating) return;

      if (event.key === "ArrowDown" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault();
        gotoSection(state.currentIndex + 1, 1);
      } else if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        gotoSection(state.currentIndex - 1, -1);
      }
    };

    const handleNavClick = (event: Event) => {
      event.preventDefault();
      const target = event.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (!href) return;

      const id = href.slice(1);
      const index = sections.findIndex((section) => section.id === id);
      if (index !== -1 && index !== state.currentIndex) {
        gotoSection(index, index > state.currentIndex ? 1 : -1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("keydown", handleKeydown);

    const navLinks = document.querySelectorAll("[data-gsap-nav]");
    navLinks.forEach((anchor) => anchor.addEventListener("click", handleNavClick));

    return () => {
      window.removeEventListener("wheel", handleWheel);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("keydown", handleKeydown);
      navLinks.forEach((anchor) => anchor.removeEventListener("click", handleNavClick));
    };
  }, [getScrollableParent, gotoSection, shouldAllowNestedScroll]);

  return (
    <div ref={containerRef} className="gsap-sections-container">
      {children}
    </div>
  );
}
