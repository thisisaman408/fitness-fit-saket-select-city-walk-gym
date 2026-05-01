"use client";

import { useCallback, useRef, useState } from "react";
import { whatsappLink } from "@/lib/data";
import { useReveal } from "./useReveal";
import { SmoothScroll } from "./SmoothScroll";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Story } from "./Story";
import { Gallery } from "./Gallery";
import { Programs } from "./Programs";
import { Classes } from "./Classes";
import { Coaches } from "./Coaches";
import { Facilities } from "./Facilities";
import { Youtube } from "./Youtube";
import { Membership } from "./Membership";
import { Funnel } from "./Funnel";
import { Visit } from "./Visit";
import { TrialForm, SuccessModal, type TrialFormState } from "./Trial";
import { FutureScope } from "./FutureScope";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";
import { FloatingWhatsApp } from "./FloatingCTA";

export function ClientApp() {
  const [modal, setModal] = useState<{ open: boolean; form: TrialFormState | null }>({
    open: false,
    form: null,
  });
  const trialRef = useRef<HTMLElement>(null);
  useReveal();

  const scrollToTrial = useCallback(() => {
    if (trialRef.current) trialRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const openSuccess = (form: TrialFormState) => setModal({ open: true, form });
  const closeModal = () => setModal((m) => ({ ...m, open: false }));

  const waLinkBase = whatsappLink({});
  const waLinkForm = whatsappLink(modal.form ?? {});

  return (
    <>
      <SmoothScroll />
      <Nav onTrial={scrollToTrial} />
      <main>
        <Hero onTrial={scrollToTrial} waLink={waLinkBase} />
        <Story />
        <Gallery />
        <Programs onCustomPlan={scrollToTrial} />
        <Classes />
        <Coaches />
        <Facilities />
        <Youtube />
        <Membership onRequest={scrollToTrial} />
        <Funnel />
        <Visit waLink={waLinkBase} />
        <TrialForm ref={trialRef} onSubmit={openSuccess} />
        <FutureScope />
      </main>
      <Footer waLink={waLinkBase} />
      <StickyCTA onTrial={scrollToTrial} waLink={waLinkBase} />
      <FloatingWhatsApp waLink={waLinkBase} />
      <SuccessModal open={modal.open} form={modal.form} waLink={waLinkForm} onClose={closeModal} />
    </>
  );
}
