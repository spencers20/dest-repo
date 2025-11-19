"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { PlayCircle, Music, Mic, Video, Heart, ArrowRight, Share2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { NavigationMenu } from "@/components/ui/navigation-menu"

type MediaItem = {
  title: string
  type: "video" | "audio" | "videolist"
  thumbnail: string
  icon: React.ElementType
  embedUrl: string | string[]
  description?: string
}

const mediaContent: MediaItem[] = [
  {
    title: "Full Interview",
    type: "video",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Full%20Interview-fEcqDHjh6KERaiP2L5UgNnwK4ch4wY.png",
    icon: PlayCircle,
    embedUrl: "https://drive.google.com/file/d/1fVm8M87cIeoxD3rm6_XXk0_eRUuFP0MX/preview",
    description: "Complete interview with Pedro Sostre III discussing automation and AI",
  },
  {
    title: "Amazing Song",
    type: "audio",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amazing%20Song-Dcsp7hrncqoSnev0LlnXA4Vn5pJSYX.png",
    icon: Music,
    embedUrl: "https://drive.google.com/file/d/1Ia0AzJgdo2T9z4DIXhSXcTVqzTpt9FUP/preview",
    description: "Pedro's magical musical creation",
  },
  {
    title: "Speaker Introduction",
    type: "video",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Introduction-Va6zz71NB0N919I05eHJNSfPFPW3VV.png",
    icon: Mic,
    embedUrl: "https://drive.google.com/file/d/1fRWtQTUkQW-Ityiml_NjclYy3R_S0I6-/preview",
    description: "Introduction to Pedro Sostre III",
  },  
  {
    title: "Interview Highlights",
    type: "videolist",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Highlights-iF52Y7jD88Ky7CxHNpyoFoy2sT9W2C.png",
    icon: Video,
    embedUrl:https://drive.google.com/file/d/1JJnrkk50YJ9T_UqAKKkJPCYYn4PU-gxR/preview,https://drive.google.com/file/d/1UB0A1z_mhPwNC7mW_uWOfincfv_hrTaN/preview,https://drive.google.com/file/d/1Hvs4sUr-deNli1RGKrtz9CMLNb3ihHNY/preview,https://drive.google.com/file/d/1JWwXt8uX21h5w9WJuhQT5thGgi_tbwAL/preview,https://drive.google.com/file/d/1OMx_cTfA-WcNReO_H3q0Ew9exehkVBC0/preview,https://drive.google.com/file/d/1XZHJ4zo2TkGqY1BpsYRzGnak92jWpUtK/preview,https://drive.google.com/file/d/1_Wwsv-wPnnFAmfd0YC8mI-lycPiYUgdx/preview,https://drive.google.com/file/d/1pimC3KTc4stlMIyiew4eOI7bzlOn-K5v/preview,https://drive.google.com/file/d/1XichNWqDNdzEq1feUk9Og55-0vtH-ylP/preview,https://drive.google.com/file/d/121aVjJ5hQuPZt0jilSBoCQb4DDtN6pyF/preview,https://drive.google.com/file/d/1Ew1bWroq34oDyaCapGG4Z0bukIzXNTYw/preview,https://drive.google.com/file/d/1IfMEk7MePjtS4M_9MUKg37aQIybYa1wy/preview,https://drive.google.com/file/d/1AyHy-FBwg6t_CdaTRpmTqg1zszok_vm3/preview,https://drive.google.com/file/d/1IUR-Ns0PF03sqa8SCb-IFaZt09IGginY/preview,https://drive.google.com/file/d/1kQz9NnB2RkFo0lxgQwnWApNhBBUN8bdx/preview,https://drive.google.com/file/d/1ebZ5ZZxFRL0nSH6GIWFfWOR6KgzQiyoO/preview,https://drive.google.com/file/d/1DGdzXKRRuvNV-xE3WdxGhUbPUA_wOdfH/preview,https://drive.google.com/file/d/195Rn8UomG8h-rSy-SEOfWQ_PCLRETUT4/preview,https://drive.google.com/file/d/1HALgprIXwJ0fCqVkIe2GGYm2ONKClkrs/preview,https://drive.google.com/file/d/1VmBJnSP1qV1oIwml_fKUQ6vdjinsAb7k/preview,https://drive.google.com/file/d/1sOXzOCG2Nl6wvRcvMVACmPaN12TnN_QO/preview,https://drive.google.com/file/d/1AslK7zGXEk-YoTjSCrVTjZ5KpnDYyw0Z/preview,https://drive.google.com/file/d/1QKv-WWMiInxeCcHI_ChNPIleJFV0jcL7/preview,https://drive.google.com/file/d/10LAHnYFKRkooQuHyCDCu47nOhPWSUzK8/preview,https://drive.google.com/file/d/1USyQ7gGtJM5x8Tk0657ZTvZo6KWXIKXY/preview,https://drive.google.com/file/d/1B5y0uXZw0ImCfSvgHNbLunLEoVk78YsX/preview,
    description: "Key moments and insights from the interview",
  },
]

const workflows = [object Object],[object Object],[object Object],[object Object],[object Object]

const highlightTitles = [
  "Automation Philosophy and Business Impact",
  "AI-Powered Marketing Strategies",
  "Customer Support Excellence",
  "Sales Outreach Best Practices",
  "Content Creation Workflows",
  "WhatsApp Business Integration",
  "Email Marketing Automation",
  "CRM and Data Management",
  "Quality Control Systems",
  "Error Handling Techniques",
  "AI Tools and Technology Stack",
  "Workflow Design Principles",
  "Google Sheets Integration",
  "Notification Systems",
  "Time-Saving Automation Tips",
  "Client Success Stories",
  "Building Scalable Workflows",
  "Integration Strategies",
  "Analytics and Reporting",
  "OpenAI API Implementation",
  "Chatbot Development",
  "Ticketing System Automation",
  "Lead Generation Automation",
  "Business Process Optimization",
  "Future of Automation and AI",
  "Social Media Automation",
  "Marketing Campaign Planning",
  "Customer Engagement Strategies",
]

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<MediaItem | null>(null)

  const openModal = (item: MediaItem) => {
    setModalContent(item)
    setModalOpen(true)
  }

  useEffect(() => {
    const handleLinkedInShare = async (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest(".share-link")

      if (!link) return

      const caption = link.getAttribute("data-caption") || ""
      const title = link.getAttribute("data-clip-id") || "Unknown Clip"
      const videoUrl = link.getAttribute("data-url") || ""

      const params = new URLSearchParams({
        clip_id: title,
        video_url: videoUrl,
        type: "video",
      })

      const width = 600
      const height = 700

      const left = window.screenX + (window.outerWidth - width) / 2
      const top = window.screenY + (window.outerHeight - height) / 2

      try {
        const res = await fetch(`/api/n8n?${params}`)
        const data = await res.json()

        if (data.redirectUrl) {
          window.open(
            data.redirectUrl,
            "linkedinPopup",
            `width=${width},height=${height},left=${left},top=${top},resizable,scrollbars`,
          )
        }
      } catch (error) {
        console.error("Error initiating LinkedIn share:", error)
      }
    }

    document.addEventListener("click", handleLinkedInShare as EventListener)
    return () => document.removeEventListener("click", handleLinkedInShare as EventListener)
  }, [])

  const profilePic = "https://drive.google.com/file/d/185VyTVCqAaMrvAgj6DVDlL_tpL-4fjzq/preview";
  const name = "Corie Meredith";
  // const bio = "__bio__";
  // const interviewVideo = "__interviewvedio__";

  return (
    <div className="bg-black text-white font-light-body">
      <main>
        {/* Hero Section */}
        <section className="relative text-center h-[70vh] md:h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="relative z-20 p-4 flex flex-col items-center">
            <div className="mb-8">
              <Image
                src={profilePic}
                alt={name}
                width={200}
                height={200}
                className="rounded-full border-4 border-[#F1ab1c] shadow-2xl"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold-title tracking-tight text-white">
              Magic <span className="text-[#F1ab1c]">{name}</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white font-light-body">
              Exploring the art of automation and AI-powered creativity.
            </p>
          </div>
        </section>

        {/* Media Content Section */}
        <section id="media" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl text-center mb-12 text-black font-bold-title">
              Discover The <span className="text-[#F1ab1c]">Magic</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {mediaContent.map((item) => (
                <div
                  key={item.title}
                  className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 bg-white"
                  onClick={() => openModal(item)}
                >
                  <div className="aspect-video relative">
                    <Image
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col items-center justify-center p-4">
                      <item.icon className="w-16 h-16 text-[#F1ab1c] opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300" />
                      <h3 className="mt-4 text-xl text-center text-white font-bold-title">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Workflows Section */}
        <section id="workflows" className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl text-center mb-12 text-white font-bold-title">
              Automation <span className="text-[#F1ab1c]">Workflows</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {!Array.isArray(workflows)? workflows.map((flow) => (
                <div
                  key={flow.title}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-xl flex flex-col hover:shadow-2xl transition-shadow duration-300 min-h-[600px]"
                >
                  <h3 className="text-xl mb-4 leading-tight font-bold-title text-[#F1ab1c]">{flow.title}</h3>

                  {/* Workflow Steps - Vertical Layout */}
                  <div className="mb-6 space-y-3 max-h-80 overflow-y-auto">
                    {flow.nodes.map((node, index) => (
                      <div key={node} className="flex items-center">
                        <div className="flex items-center justify-center w-6 h-6 bg-[#F1ab1c] text-white text-xs font-bold-title rounded-full mr-3 flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg border border-gray-200 text-sm flex-grow font-light-body">
                          {node}
                        </span>
                        {index < flow.nodes.length - 1 && (
                          <div className="ml-3 flex flex-col items-center">
                            <ArrowRight className="w-4 h-4 transform rotate-90 text-[#F1ab1c]" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-800 text-sm flex-grow leading-relaxed font-light-body">{flow.description}</p>
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <a
                      href="https://meet.manymangoes.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-[#F1ab1c] hover:bg-[#e8a318] text-white font-bold-title py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105"
                    >
                      Build the Magic
                    </a>
                  </div>
                </div>
              )):null}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-center py-6">
        <p className="text-white flex items-center justify-center gap-2 font-light-body">
          2025 Made with <Heart className="w-4 h-4 text-[#F1ab1c]" /> by ManyMangoes
        </p>
      </footer>

      {modalContent && (
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent className="bg-white border-gray-300 text-black max-w-6xl w-full p-0 max-h-[90vh] overflow-y-auto">
            <DialogHeader className="p-4 border-b border-gray-300">
              <DialogTitle className="font-bold-title text-[#F1ab1c]">{modalContent.title}</DialogTitle>
              {modalContent.description && (
                <p className="text-gray-600 font-light-body mt-2">{modalContent.description}</p>
              )}
            </DialogHeader>
            <div className="p-1 md:p-2">
              {modalContent.type === "video" && (
                <div className="aspect-video">
                  <iframe
                    src={modalContent.embedUrl as string}
                    className="w-full h-full rounded-b-lg"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={modalContent.title}
                    loading="lazy"
                  />
                </div>
              )}
              {modalContent.type === "audio" && (
                <div className="flex flex-col items-center justify-center p-8">
                  <div className="mb-6">
                    <Music className="w-24 h-24 text-[#F1ab1c]" />
                  </div>
                  <div className="aspect-video w-full max-w-2xl">
                    <iframe
                      src={modalContent.embedUrl as string}
                      className="w-full h-full rounded-lg"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={modalContent.title}
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
              {modalContent.type === "videolist" && (
                <div className="max-h-[70vh] overflow-y-auto p-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {(modalContent.embedUrl as string[]).map((url, index) => (
                    <div key={url} className="flex flex-col">
                      <h4 className="text-center text-black font-bold-title text-sm mb-2">
                        {highlightTitles[index] || `Interview Moment ${index + 1}`}
                      </h4>
                      <div className="aspect-[9/16] mb-3">
                        <iframe
                          src={url}
                          className="w-full h-full rounded-lg"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          title={`Highlight ${index + 1}`}
                          loading="lazy"
                        />
                      </div>
                      <button
                        className="share-link w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white font-bold-title rounded-lg transition-colors"
                        data-caption={highlightTitles[index] || `Interview Moment ${index + 1}`}
                        data-clip-id={highlightTitles[index] || `Interview Moment ${index + 1}`}
                        data-url={url}
                        title="Share on LinkedIn"
                      >
                        <Share2 className="w-4 h-4" />
                        Share to LinkedIn
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
