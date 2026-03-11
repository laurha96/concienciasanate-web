import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { Hero } from "@/components/healthtech/hero";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
	title: "Contacto",
	description:
		"Contacto de Conciencia Sánate. Escríbenos con tu consulta y te responderemos lo antes posible.",
};

export default function ContactoPage() {
	return (
		<div>
			<Hero
				title="Contacto"
				subtitle="Escríbenos con tu consulta. Te responderemos lo antes posible."
				primaryCta={{ label: "Abrir formulario", href: "#form" }}
				secondaryCta={{ label: "Ver Elynthis", href: "/elynthis" }}
			/>

			<section id="form" className="py-20 sm:py-24">
				<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
					<SectionHeading
						title="Formulario"
						description="Campos: nombre, email, asunto y mensaje. Motivo opcional."
					/>
					<div className="mt-10 rounded-3xl border border-border/60 bg-card p-6 shadow-sm sm:p-8">
						<ContactForm toEmail="laurarojas@concienciasanate.org" includeReasonDropdown />
					</div>
				</div>
			</section>
		</div>
	);
}
