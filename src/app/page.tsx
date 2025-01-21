"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Menu, X, LinkedinIcon, YoutubeIcon, Zap, Brain, Code, LineChart } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-700 sticky top-0 z-50 bg-black">
        <Link href="/" className="flex items-center justify-center">
          <Zap className="h-6 w-6 text-yellow-400" />
          <span className="ml-2 text-2xl font-bold text-white">HTagency</span>
        </Link>
        <nav className="hidden md:flex ml-auto gap-4 sm:gap-6">
          <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
            À propos
          </Link>
          <Link href="#temoignages" className="text-sm font-medium hover:underline underline-offset-4">
            Témoignages
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <button className="ml-auto md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </header>
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-90">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <Link href="#services" className="text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link href="#about" className="text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>
              À propos
            </Link>
            <Link href="#temoignages" className="text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>
              Témoignages
            </Link>
            <Link href="#contact" className="text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black relative overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(20px,1fr))] grid-rows-[repeat(auto-fill,minmax(20px,1fr))]">
            {[...Array(1000)].map((_, i) => (
              <div key={i} className="border-t border-l border-gray-800"></div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/40 to-black"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                  Transformez Votre Entreprise avec l'IA et l'IT
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  HTagency vous accompagne dans votre transformation numérique avec des solutions sur mesure en IA et
                  IT.
                </p>
              </div>
              <div>
                <Link href="#contact">
                  <Button className="bg-gradient-to-r from-yellow-400 to-white text-gray-900 font-bold hover:from-yellow-500 hover:to-gray-100 rounded-full">
                    Commencez Maintenant
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="h-px bg-gradient-to-r from-yellow-400 to-black"></div>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
              Nos Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gray-800 overflow-hidden relative before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-yellow-400 before:to-white before:-z-10 before:rounded-lg">
                <CardContent className="p-5">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-black flex items-center justify-center border border-yellow-400">
                      <Brain className="h-6 w-6 text-yellow-400" />
                    </div>
                    <h3 className="text-2xl font-bold ml-4 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                      Solutions IA
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    Optimisez vos processus avec nos solutions d'intelligence artificielle avancées.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 overflow-hidden relative before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-yellow-400 before:to-white before:-z-10 before:rounded-lg">
                <CardContent className="p-5">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-black flex items-center justify-center border border-yellow-400">
                      <Code className="h-6 w-6 text-yellow-400" />
                    </div>
                    <h3 className="text-2xl font-bold ml-4 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                      Développement IT
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    Créez des applications robustes et évolutives avec notre expertise en développement.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 overflow-hidden relative before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-yellow-400 before:to-white before:-z-10 before:rounded-lg">
                <CardContent className="p-5">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-black flex items-center justify-center border border-yellow-400">
                      <LineChart className="h-6 w-6 text-yellow-400" />
                    </div>
                    <h3 className="text-2xl font-bold ml-4 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                      Conseil Stratégique
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    Bénéficiez de conseils d'experts pour aligner votre technologie sur vos objectifs commerciaux.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                  À Propos de Nous
                </h2>
                <p className="text-gray-300 md:text-xl">
                  HTagency est une agence leader dans le domaine de l'IA et de l'IT. Nous sommes passionnés par
                  l'innovation et déterminés à aider nos clients à réussir leur transformation numérique. Avec notre
                  expertise de pointe et notre approche personnalisée, nous créons des solutions qui propulsent les
                  entreprises vers l'avenir.
                </p>
              </div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/collaboration-pexels.jpg"
                  alt="Business collaboration meeting showing professionals discussing in a modern office setting"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section id="temoignages" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
              Témoignages Clients
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-800 overflow-hidden relative before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-yellow-400 before:to-white before:-z-10 before:rounded-lg">
                <CardContent className="p-5">
                  <p className="italic mb-4 text-gray-200">
                    "HTagency a révolutionné notre approche de l'IA. Leur expertise a considérablement amélioré notre
                    efficacité."
                  </p>
                  <p className="font-bold text-gray-100">Marie Dubois, CEO de TechFrance</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 overflow-hidden relative before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-yellow-400 before:to-white before:-z-10 before:rounded-lg">
                <CardContent className="p-5">
                  <p className="italic mb-4 text-gray-200">
                    "Leur équipe IT a développé une solution parfaitement adaptée à nos besoins. Un vrai partenariat
                    gagnant."
                  </p>
                  <p className="font-bold text-gray-100">Pierre Martin, CTO d'InnovCorp</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
              Foire Aux Questions
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Qu'est-ce que l'IA et comment peut-elle bénéficier à mon entreprise ?
                </AccordionTrigger>
                <AccordionContent>
                  L'Intelligence Artificielle (IA) est un domaine de l'informatique qui vise à créer des machines
                  capables d'effectuer des tâches qui nécessiteraient normalement l'intelligence humaine. Pour votre
                  entreprise, l'IA peut automatiser des processus, analyser de grandes quantités de données pour obtenir
                  des insights précieux, améliorer le service client avec des chatbots, et bien plus encore. Cela peut
                  se traduire par une efficacité accrue, une réduction des coûts et une meilleure prise de décision.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Comment HTagency assure-t-elle la sécurité des données de ses clients ?
                </AccordionTrigger>
                <AccordionContent>
                  Chez HTagency, la sécurité des données est notre priorité absolue. Nous utilisons des protocoles de
                  cryptage avancés, des pare-feu robustes et des systèmes de détection d'intrusion pour protéger les
                  données de nos clients. Nous effectuons régulièrement des audits de sécurité et nous nous conformons
                  aux normes de l'industrie telles que GDPR et ISO 27001. De plus, nous formons continuellement notre
                  personnel aux meilleures pratiques en matière de sécurité des données.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Combien de temps faut-il pour mettre en œuvre une solution IA ou IT dans mon entreprise ?
                </AccordionTrigger>
                <AccordionContent>
                  Le temps de mise en œuvre d'une solution IA ou IT varie en fonction de la complexité du projet et de
                  l'état actuel de votre infrastructure technologique. Généralement, cela peut prendre de quelques
                  semaines à plusieurs mois. Chez HTagency, nous commençons par une évaluation approfondie de vos
                  besoins et de votre environnement existant. Ensuite, nous élaborons un plan de projet détaillé avec
                  des étapes claires et des délais réalistes. Notre approche agile nous permet d'être flexibles et de
                  vous livrer des résultats tangibles à chaque étape du processus.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Quels sont les coûts associés aux services de HTagency ?
                </AccordionTrigger>
                <AccordionContent>
                  Les coûts de nos services varient en fonction de la nature et de l'ampleur du projet. Nous proposons
                  des solutions personnalisées adaptées aux besoins spécifiques de chaque client, ce qui signifie que
                  les prix peuvent varier considérablement. Cependant, nous nous efforçons toujours d'offrir un
                  excellent rapport qualité-prix. Nous commençons par une consultation gratuite pour comprendre vos
                  besoins, après quoi nous vous fournissons un devis détaillé. Nous proposons également des options de
                  tarification flexibles, y compris des modèles basés sur des projets ou des contrats de service à long
                  terme.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
              Contactez-nous
            </h2>
            <form className="max-w-md mx-auto space-y-4">
              <Input
                type="text"
                placeholder="Nom"
                required
                className="bg-gray-800 border-gray-600 text-gray-300 rounded-full"
              />
              <Input
                type="email"
                placeholder="Email"
                required
                className="bg-gray-800 border-gray-600 text-gray-300 rounded-full"
              />
              <Input
                type="tel"
                placeholder="Téléphone"
                className="bg-gray-800 border-gray-600 text-gray-300 rounded-full"
              />
              <Textarea
                placeholder="Votre message"
                required
                className="bg-gray-800 border-gray-600 text-gray-300 rounded-2xl"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-white text-gray-900 font-bold hover:from-yellow-500 hover:to-gray-100 rounded-full"
              >
                Envoyer
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t border-gray-700">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-300">© 2025 HTagency. Tous droits réservés.</p>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Mentions légales
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Politique de confidentialité
            </Link>
          </nav>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" aria-label="LinkedIn">
              <LinkedinIcon className="w-6 h-6" />
            </Link>
            <Link href="#" aria-label="X">
              <X className="w-6 h-6" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <YoutubeIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

