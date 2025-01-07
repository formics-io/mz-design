<script>
	import Card from "$lib/components/Card.svelte";
	import Contactus from "$lib/components/Contactus.svelte";

  
    const services = [
      {
        title: "Planning",
        description:
          "We offer planning services to ensure seamless execution and optimal results, focusing on every detail for project success.",
        image: "/images/service/service.png",
        features: ["Site analysis", "Design concepts", "Structural plans", "Material selection"],
      },
      {
        title: "Interior Design",
        description:
          "Transform your spaces with personalized designs that blend beauty, functionality, and style.",
        image: "/images/service/service2.png",
        features: ["Concept design", "Furniture layout", "Mood boards", "Material and color palettes"],
      },
      {
        title: "Landscape Design",
        description:
          "We design sustainable outdoor spaces that harmonize nature and structure, creating serene environments.",
        image: "/images/service/service3.png",
        features: ["Site assessment", "Planting plans", "Hardscape design", "Lighting and irrigation plans"],
      },
      {
        title: "Lighting Design",
        description:
          "Enhance your spaces with lighting that adds ambiance, functionality, and tailored elegance.",
        image: "/images/service/service4.png",
        features: ["Lighting layouts", "Energy-efficient solutions", "Installation guidelines"],
      },
      {
        title: "Graphics",
        description:
          "Bring your ideas to life with graphic designs that captivate and communicate effectively.",
        image: "/images/service/service5.png",
        features: ["Branding materials", "Visual concepts", "Digital and print-ready designs"],
      },
      {
        title: "Paintings & Art Pieces",
        description:
          "Add character to your spaces with curated or custom art pieces that reflect your style.",
        image: "/images/service/service6.png",
        features: [
          "Custom commissions",
          "Art consultations",
          "Framing and installation advice",
          "Traditional, contemporary, and digital art",
        ],
      },
      {
        title: "Workshop & Training Provider",
        description:
          "Empower creativity with certified training in arts, design, and real estate. Our workshops provide skills to excel and transform passion into profession.",
        image: "/images/service/service7.png",
        features: ["Certified trainers", "Practical workshops", "Real-world applications"],
      },
    ];
  </script>
  
  <section class=" xl:py-[77px] mx-auto">

   <div class="max-w-[1200px] mx-auto  space-y-8">
      <h2 class="md:text-4xl text-3xl text-center font-alice ">Our Services</h2>
      <div class="space-y-8 px-[5%]">
        {#each services as service, index}
          <Card
            title={service.title}
            description={service.description}
            image={service.image}
            features={service.features}
            reverse={index % 2 === 1}
          />
        {/each}
      </div>      
    </div>
 
   
  </section>
  
  <Contactus/>