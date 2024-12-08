import Image from "next/image";

export default function Output() {
  const documentationItems = [
    {
      image: "/socials/lab.png",
      description: "Short description describing the image",
      alt: "Students working on an engineering project at a workbench",
    },
    {
      image: "/socials/mess.png",
      description: "Short description describing the image",
      alt: "3D printer or robotic equipment setup on a workbench",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">
        Preview of Output / Documentation
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {documentationItems.map((item, index) => (
          <div key={index} className="space-y-4">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg border border-gray-200">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
