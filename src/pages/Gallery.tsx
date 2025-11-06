import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const galleryImages = [
    { src: "/images/atelier-1.jpg", title: "Notre atelier - Moteurs", category: "Atelier" },
    { src: "/images/atelier-2.jpg", title: "Notre atelier - Pièces mécaniques", category: "Atelier" },
    { src: "/images/atelier-3.jpg", title: "Notre atelier - Stock de cardans", category: "Atelier" },
    { src: "/images/atelier-4.jpg", title: "Notre atelier - Cardans disponibles", category: "Atelier" },
    { src: "/images/atelier-5.jpg", title: "Notre atelier - Pare-chocs", category: "Atelier" },
    { src: "/images/atelier-6.jpg", title: "Notre atelier - Pièces diverses", category: "Atelier" },
    { src: "/images/atelier-7.jpg", title: "Notre atelier - Stock organisé", category: "Atelier" },
    { src: "/images/atelier-8.jpg", title: "Notre atelier - Vue d'ensemble", category: "Atelier" },
    { src: "/images/atelier-9.jpg", title: "Notre atelier - Espace de travail", category: "Atelier" },
    { src: "/images/atelier-10.jpg", title: "Notre atelier - Rayonnage", category: "Atelier" },
    { src: "/images/atelier-11.jpg", title: "Notre atelier - Radiateurs et pièces", category: "Atelier" },
    { src: "/images/atelier-12.jpg", title: "Notre atelier - Zone de stockage", category: "Atelier" },
    { src: "/images/atelier-13.jpg", title: "Notre atelier - Stock suspendu", category: "Atelier" },
    { src: "/images/atelier-14.jpg", title: "Notre atelier - Étagères complètes", category: "Atelier" },
    { src: "/images/atelier-15.jpg", title: "Notre atelier - Pare-chocs empilés", category: "Atelier" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-sky-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-4 text-foreground">
            Galerie
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre large gamme de pièces automobiles de qualité pour tous types de véhicules.
          </p>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => {
            // Définir des tailles variées pour créer l'effet mosaïque
            const getMosaicClass = (idx: number) => {
              const pattern = idx % 8;
              if (pattern === 0) return "col-span-2 row-span-2 md:col-span-2 md:row-span-2";
              if (pattern === 3) return "col-span-2 row-span-1 md:col-span-2 md:row-span-1";
              if (pattern === 6) return "col-span-2 row-span-2 md:col-span-2 md:row-span-2";
              return "col-span-1 row-span-1";
            };

            return (
              <Card 
                key={index} 
                className={`overflow-hidden hover:shadow-lg transition-all duration-300 group ${getMosaicClass(index)}`}
              >
                <CardContent className="p-0 h-full">
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-semibold text-lg text-white mb-1">
                          {image.title}
                        </h3>
                        <p className="text-sm text-white/90">
                          {image.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <section className="mt-12 bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Besoin d'une pièce spécifique ?
          </h2>
          <p className="text-muted-foreground mb-6">
            Contactez-nous pour obtenir des informations sur la disponibilité et les prix de nos produits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Téléphone :</span>
              <span className="text-primary">+221 70 147 67 35</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">WhatsApp :</span>
              <span className="text-primary">+221 78 122 25 85</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
