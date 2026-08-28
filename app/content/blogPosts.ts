// Blog content sourced verbatim from "msiplblogs-1.docx".

export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] };

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  /** Card/hero image. Recommend source photography at 1200x675px (16:9). */
  image: string;
  imageAlt: string;
  blocks: BlogBlock[];
  faqs: { q: string; a: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-goes-into-making-a-quality-detergent-powder',
    title: 'What Goes Into Making a Quality Detergent Powder?',
    metaDescription:
      'Discover what goes into a quality detergent powder—from surfactants and builders to enzymes, fragrance and quality testing—and how each element contributes to effective washing.',
    image: '/images/SHASHI TRIPLE ACTION.webp',
    imageAlt: 'Shashi Triple Action detergent powder pack',
    blocks: [
      { type: 'heading', level: 2, text: 'What Makes a Detergent Powder a Quality Product?' },
      {
        type: 'p',
        text: 'A detergent powder may look simple. Open the pack. Measure the powder. Add it to the wash. Rinse. Done. But behind that simple routine is a carefully designed combination of chemistry, formulation, manufacturing and quality control.',
      },
      {
        type: 'p',
        text: 'A quality detergent powder is not defined by a single ingredient. It is the result of several components working together in the right balance.',
      },
      {
        type: 'p',
        text: 'The surfactant needs to lift and loosen soil. Builders need to support cleaning in different water conditions. Functional additives can help prevent removed soil from settling back onto fabric. Enzymes may target specific types of stains. Fragrance contributes to the sensory experience. The powder itself must remain stable, free-flowing and consistent throughout its shelf life.',
      },
      {
        type: 'p',
        text: 'In other words, quality detergent powder is about balance. The right formulation should deliver reliable cleaning while remaining suitable for its intended use, washing conditions and product positioning. This is why detergent manufacturing is much more than simply mixing raw materials.',
      },

      { type: 'heading', level: 2, text: 'The Science Behind a Detergent Powder' },
      {
        type: 'p',
        text: 'Dirt on clothing is not one thing. It can include oils, food residues, sweat, dust, proteins, starches, particulate soil and other substances. Different soils behave differently during washing. Some are water-soluble. Others are oily or strongly attached to fabric fibres. Water alone cannot efficiently remove all of them. That is where detergent chemistry comes in.',
      },
      {
        type: 'p',
        text: 'A detergent formulation is designed so that its different components perform complementary functions during the wash cycle. Surfactants help with wetting, emulsification and soil removal. Builders support detergent performance by managing water hardness and alkalinity. Enzymes can break down certain organic soils. Other additives help maintain fabric appearance and prevent removed soil from returning to the fabric.',
      },
      {
        type: 'p',
        text: 'Modern detergent powders can therefore contain many different components, each serving a specific purpose. Scientific literature describes detergent formulations as combinations of surfactants, builders, bleaching systems and auxiliary additives, with manufacturing processes designed around the properties of these materials. The result should be a powder that performs consistently—not only in the laboratory, but in everyday washing.',
      },

      { type: 'heading', level: 2, text: 'What Ingredients Go Into Detergent Powder?' },
      { type: 'p', text: 'There is no single universal detergent powder formula. The exact formulation depends on factors such as:' },
      {
        type: 'list',
        items: [
          'Intended washing method',
          'Desired cleaning performance',
          'Water conditions',
          'Product positioning',
          'Target consumer',
          'Manufacturing process',
          'Required powder characteristics',
          'Fragrance and sensory profile',
          'Packaging format',
          'Storage conditions',
        ],
      },
      { type: 'p', text: 'However, most quality detergent powders are built around several important ingredient groups. The main ingredient groups include:' },
      {
        type: 'list',
        items: [
          'Surfactants',
          'Builders',
          'Enzymes',
          'Anti-redeposition agents',
          'Optical brighteners',
          'Bleaching systems, where applicable',
          'Fragrance',
          'Colour and visual additives',
          'Fillers and processing aids',
          'Moisture and flow-control components',
        ],
      },
      { type: 'p', text: 'Each group has a role. The goal is not to maximise every ingredient. The goal is to create the right formulation for the intended product.' },

      { type: 'heading', level: 2, text: 'Surfactants: The Cleaning Core' },
      {
        type: 'p',
        text: 'If there is one ingredient group at the heart of detergent performance, it is surfactants. Surfactants help water interact with soils that ordinary water may struggle to remove. They reduce surface tension, improve wetting and help loosen, emulsify and suspend soils during washing. Think of them as the part of the formulation that helps bridge the gap between water, fabric and dirt.',
      },
      { type: 'p', text: 'A detergent formulation may use one surfactant or a combination of surfactants. Different surfactants can provide different characteristics, including:' },
      { type: 'list', items: ['Wetting performance', 'Grease removal', 'Soil lifting', 'Emulsification', 'Foaming characteristics', 'Compatibility with other ingredients'] },
      {
        type: 'p',
        text: 'This is why simply asking, "How much surfactant is in the detergent?" does not tell the complete story. The type of surfactant, the combination used and how it interacts with the rest of the formulation all matter. A quality detergent powder is therefore formulated as a system, not as a collection of isolated ingredients.',
      },

      { type: 'heading', level: 2, text: 'Builders: Helping Detergent Work in Water' },
      {
        type: 'p',
        text: 'Water is not the same everywhere. Water hardness can influence washing performance because dissolved minerals can interfere with the action of cleaning ingredients. Builders are included in detergent formulations to help manage these conditions and support the cleaning system.',
      },
      {
        type: 'p',
        text: 'Common builder systems can include materials such as sodium carbonate, zeolites, phosphates where permitted and selected alternatives. Their exact use depends on the formulation and regulatory requirements. Builders can contribute by:',
      },
      { type: 'list', items: ['Supporting surfactant performance', 'Managing water hardness', 'Providing alkalinity', 'Helping disperse soil', 'Supporting overall detergent performance'] },
      { type: 'p', text: 'This is one reason a quality detergent cannot be evaluated only by looking at its fragrance or foam. Good cleaning is the result of the entire formulation working together.' },

      { type: 'heading', level: 2, text: 'Enzymes: Designed for Specific Stains' },
      { type: 'p', text: 'Some stains require more specialised chemistry. Enzymes can help address specific types of organic soils by breaking them down into smaller components that can be more readily removed during washing. Different enzymes target different types of stains.' },
      {
        type: 'list',
        items: [
          'Protease — Helps break down protein-based soils such as those found in certain food residues and bodily soils.',
          'Amylase — Targets starch-based soils.',
          'Lipase — Helps break down fats and oils.',
          'Cellulase — Can support the care and appearance of cotton fabrics by acting on certain fibre-surface characteristics.',
        ],
      },
      {
        type: 'p',
        text: 'Enzymes are particularly useful because they can work effectively at relatively low concentrations when appropriately formulated. But enzymes also require care. They are sensitive functional ingredients. Their activity can be affected by factors such as temperature, moisture and formulation conditions. For this reason, manufacturing processes need to account for when and how sensitive ingredients are incorporated into the final powder. This is another example of why quality is created through process—not simply through ingredients.',
      },

      { type: 'heading', level: 2, text: 'Anti-Redeposition Agents: Keeping Dirt Away' },
      {
        type: 'p',
        text: 'Removing dirt is only part of the job. Once soil has been released from fabric, the formulation should help keep that soil dispersed in the wash water rather than allowing it to settle back onto the fabric. This is where anti-redeposition agents can play an important role. Ingredients such as carboxymethyl cellulose (CMC) are commonly used in detergent formulations for this purpose.',
      },
      {
        type: 'p',
        text: 'The principle is straightforward: Lift the soil. Keep it suspended. Rinse it away. That small sequence explains an important part of detergent performance. A detergent that effectively loosens soil but does not adequately control redeposition may not deliver the same overall result as a well-balanced formulation.',
      },

      { type: 'heading', level: 2, text: 'Optical Brighteners: Supporting Fabric Appearance' },
      {
        type: 'p',
        text: 'Clean and bright are not always the same thing. Certain detergent formulations use optical brighteners to enhance the visual appearance of washed fabrics. These materials work through fluorescence. They absorb ultraviolet light and emit light in the blue-violet region, creating an optical effect that can make fabrics appear brighter or whiter.',
      },
      { type: 'p', text: 'Optical brighteners are used in very small quantities, but their role can be significant. They are not a substitute for cleaning. Instead, they complement the cleaning system by supporting the appearance of fabrics after washing.' },

      { type: 'heading', level: 2, text: 'Fragrance and Colour: The Sensory Experience' },
      {
        type: 'p',
        text: 'Cleaning performance is essential. But the experience of using a detergent matters too. Fragrance can contribute to the feeling of freshness after washing. Colour and visual elements can help establish product identity and appearance. These components are not the primary cleaning mechanism. They are part of the overall consumer experience.',
      },
      {
        type: 'p',
        text: 'Fragrance, in particular, needs to be considered carefully during manufacturing because some fragrance components can be sensitive to processing conditions. Depending on the manufacturing route, fragrance and other sensitive ingredients may be added later in the process to help preserve their intended characteristics. The objective is simple: A detergent should clean well and feel right to use.',
      },

      { type: 'heading', level: 2, text: 'Fillers and Processing Aids: More Than Just Bulk' },
      {
        type: 'p',
        text: 'The term "filler" can make an ingredient sound unimportant. It is not. Materials such as sodium sulphate may be used in detergent powder formulations to influence factors including product economics, density and physical characteristics. Other processing aids can contribute to:',
      },
      { type: 'list', items: ['Powder flow', 'Granule formation', 'Moisture management', 'Anti-caking performance', 'Physical stability', 'Consistent dosing'] },
      {
        type: 'p',
        text: 'The physical form of the detergent matters because consumers need to be able to store, handle, measure and use the product easily. A formulation that cleans well but becomes excessively lumpy during storage is not a well-rounded consumer product. Performance includes what happens before, during and after the wash.',
      },

      { type: 'heading', level: 2, text: 'How Is Detergent Powder Made?' },
      { type: 'p', text: 'The manufacturing process depends on the formulation and the production technology. Broadly, detergent powders can be produced through methods such as:' },
      { type: 'list', items: ['Spray drying', 'Dry mixing', 'Agglomeration', 'Other non-tower manufacturing processes'] },
      {
        type: 'p',
        text: 'Each process has different implications for ingredient selection, moisture, granule structure, density, flowability and the handling of sensitive ingredients. A simplified manufacturing journey looks like this:',
      },
      {
        type: 'list',
        items: [
          'Raw Material Selection — The process begins with selecting raw materials that meet the required quality specifications. Consistency starts here. If the incoming raw materials vary significantly, the finished product can vary too.',
          'Weighing and Batching — Ingredients are measured according to the approved formulation. Precision matters because detergent is a balanced system. Even relatively small changes in the formulation can influence the characteristics of the finished product.',
          'Mixing or Slurry Preparation — Depending on the manufacturing method, selected ingredients are combined to form a slurry or dry blend. The objective is uniform distribution. Every part of the final powder should contain the appropriate balance of functional ingredients.',
          "Drying or Granulation — In spray-drying processes, a detergent slurry can be processed into granules through controlled drying. Alternative processes can use dry blending, agglomeration or granulation. The chosen method affects the final powder's physical properties, including particle size, density and flowability.",
          'Post-Addition of Sensitive Ingredients — Certain ingredients, including enzymes, fragrances and some optical brighteners, may be incorporated after high-temperature processing. This helps protect ingredients that can be sensitive to heat or other processing conditions.',
          'Final Blending — The different components are blended to achieve a consistent finished powder. Uniformity matters. A consumer should not receive a different formulation simply because one scoop came from a different section of the pack.',
          'Quality Control — The finished detergent is evaluated against defined quality parameters before packaging and distribution. Only after the product meets the required specifications should it move forward.',
        ],
      },

      { type: 'heading', level: 2, text: 'Why Mixing and Ingredient Order Matter' },
      {
        type: 'p',
        text: 'A detergent formula can be correct on paper and still perform differently if the manufacturing process is inconsistent. The sequence of addition, mixing time, temperature and moisture conditions can influence the final product. This is especially important when a formulation contains ingredients with different physical and chemical characteristics.',
      },
      {
        type: 'p',
        text: 'For example, sensitive ingredients such as enzymes and fragrance may require controlled addition conditions. Industry formulation guidance notes that adding sensitive materials at inappropriate stages can reduce their effectiveness or alter the final product characteristics. That makes manufacturing discipline a key part of detergent quality. The formula defines what the product should be. The process helps make sure it becomes that product consistently.',
      },

      { type: 'heading', level: 2, text: 'Quality Checks Before Detergent Powder Reaches You' },
      { type: 'p', text: 'Quality control is not a single test at the end of manufacturing. It is a process. A robust detergent manufacturing operation can involve checks across raw materials, production and finished goods. Depending on the product and internal specifications, manufacturers may monitor characteristics such as:' },
      {
        type: 'list',
        items: [
          'Appearance', 'Colour', 'Fragrance', 'Moisture', 'Bulk density', 'Flowability',
          'Particle characteristics', 'Active matter', 'Cleaning performance', 'Foam characteristics',
          'Storage stability', 'Packaging integrity',
        ],
      },
      { type: 'p', text: 'The exact parameters depend on the product formulation and manufacturing requirements. The purpose is consistent: make sure the product leaving the factory performs as intended.' },

      { type: 'heading', level: 2, text: 'What Makes a Detergent Powder Consistent?' },
      { type: 'p', text: 'Imagine buying the same detergent twice. You expect the same product. You expect the same basic appearance, the same handling characteristics, the same fragrance profile and, most importantly, dependable cleaning performance. That expectation is built through consistency. Consistency depends on several factors:' },
      {
        type: 'list',
        items: [
          'Consistent Raw Materials — The quality of the starting materials influences the final product.',
          'Controlled Formulation — Ingredients must be added according to the approved formulation.',
          'Controlled Processing — Mixing, temperature, drying and other production parameters need to remain within defined limits.',
          'Uniform Distribution — Functional ingredients must be distributed evenly throughout the powder.',
          'Quality Testing — Finished products need to be checked against defined specifications.',
          "Proper Packaging — The product needs protection from moisture and other storage conditions that can affect powder quality.",
        ],
      },
      { type: 'p', text: 'Together, these controls turn a formulation into a reliable consumer product.' },

      { type: 'heading', level: 2, text: 'The Role of Packaging in Detergent Powder Quality' },
      {
        type: 'p',
        text: "Quality does not end when the powder is manufactured. Detergent powder needs to remain stable between the factory and the consumer's home. Moisture is one of the key considerations for powdered products because it can contribute to caking and changes in powder handling characteristics. This makes packaging an important part of product quality. A well-designed package should help:",
      },
      { type: 'list', items: ['Protect the powder from environmental moisture', 'Preserve product integrity', 'Support convenient handling', 'Communicate usage information', 'Maintain product identity', 'Protect the product during storage and transportation'] },
      { type: 'p', text: 'The pack is not simply a container. It is part of the product experience.' },

      { type: 'heading', level: 2, text: 'Quality Is More Than Cleaning Power' },
      { type: 'p', text: 'When people think about detergent quality, they often think about one thing: how well does it clean? That question matters. But it is only the beginning. A quality detergent powder needs to bring several things together.' },
      {
        type: 'p',
        text: 'It should have a purposeful formulation. It should be manufactured consistently. It should maintain its physical properties during storage. It should provide a dependable washing experience. And it should be packaged in a way that helps preserve the product until it reaches the consumer.',
      },
      { type: 'p', text: 'This is particularly important for FMCG products. A detergent is used repeatedly. It becomes part of a household routine. That means quality is experienced not once, but again and again.' },

      { type: 'heading', level: 2, text: 'Detergent Powder as an Everyday Home-Care Essential' },
      {
        type: 'p',
        text: "Laundry is one of the most routine parts of household life. The detergent used for that routine needs to be dependable. At Maharaj Soaps Industries Private Limited (MSIPL), home-care products form an important part of the company's FMCG portfolio. The company states that it has been manufacturing home-care and hygiene products since 2000, with products including washing powders, detergent soaps, liquid detergents, dishwash products and phenyls under brands such as Shashi and Savaal.",
      },
      {
        type: 'p',
        text: "The current MSIPL product portfolio includes washing-powder products such as Savaal Gold Washing Powder and Savaal 999 Washing Powder, alongside other detergent and home-care formats. The company's website positions Savaal Gold as a premium washing powder and Savaal 999 as a high-performance washing powder.",
      },
      { type: 'p', text: 'This broader portfolio reflects an important principle in home care: different washing needs require thoughtfully designed products. A detergent powder is not simply a powder that cleans. It is a formulated home-care product designed around performance, usability, consistency and everyday needs.' },

      { type: 'heading', level: 2, text: "Explore MSIPL's Home-Care Products" },
      {
        type: 'p',
        text: 'If you want to explore the complete range of detergent, washing and home-care products from Maharaj Soaps Industries Private Limited, visit the MSIPL Products page. The current portfolio includes products across the Shashi and Savaal brands, including washing powders, detergent cakes, pouches and dishwash products. For consumers, the product page provides a direct way to discover the available range. For retailers, distributors and FMCG partners, it also offers a starting point for understanding the company\'s home-care portfolio.',
      },

      { type: 'heading', level: 2, text: 'Data Table: What Goes Into a Quality Detergent Powder?' },
      {
        type: 'table',
        headers: ['Ingredient / Component', 'Primary Function', 'Why It Matters'],
        rows: [
          ['Surfactants', 'Wetting, emulsification and soil removal', 'Form the core cleaning system'],
          ['Builders', 'Water softening and alkalinity support', 'Help maintain cleaning performance in different water conditions'],
          ['Enzymes', 'Target specific organic stains', 'Support removal of protein, starch, fat and other soils'],
          ['Anti-redeposition agents', 'Keep removed soil suspended', 'Help prevent soil from settling back onto fabric'],
          ['Optical brighteners', 'Enhance visual brightness', 'Support the appearance of washed fabrics'],
          ['Bleaching systems', 'Oxidative stain removal, where applicable', 'Can provide additional stain-removal performance'],
          ['Fragrance', 'Freshness and sensory experience', 'Contributes to the overall user experience'],
          ['Colour / Speckles', 'Product appearance and identity', 'Supports visual differentiation'],
          ['Fillers', 'Density and formulation balance', 'Help achieve desired physical and economic characteristics'],
          ['Flow-control / Anti-caking aids', 'Improve powder handling', 'Help maintain a free-flowing product'],
          ['Moisture control', 'Maintain powder stability', 'Helps reduce caking and preserve physical properties'],
        ],
      },
      {
        type: 'p',
        text: 'Note: The exact ingredients and proportions vary by detergent formulation, product positioning, manufacturing method and applicable requirements. This table describes common functional categories rather than the proprietary formulation of any specific MSIPL product.',
      },

      { type: 'heading', level: 2, text: 'Conclusion: Quality Is Formulated Into Every Wash' },
      {
        type: 'p',
        text: 'A quality detergent powder does not come from one secret ingredient. It comes from many carefully considered elements working together. Surfactants help lift and remove soil. Builders support cleaning in water. Enzymes can target specific stains. Anti-redeposition agents help keep removed soil away from fabric. Optical brighteners support visual brightness. Fragrance adds freshness. Processing aids help create a stable, usable powder.',
      },
      {
        type: 'p',
        text: 'Then comes the part that brings everything together: manufacturing discipline. The right raw materials need to be selected. The formulation needs to be controlled. Ingredients need to be added at the right stage. Mixing and processing need to be consistent. Finished products need to be tested. Packaging needs to protect the powder until it reaches the consumer.',
      },
      {
        type: 'p',
        text: 'That is what makes detergent quality more than a claim. It is a process. And for an everyday product used in homes across India, that process matters. At MSIPL, the focus on home-care products extends across detergent powders, detergent cakes and other cleaning essentials under brands including Shashi and Savaal. Explore the MSIPL product portfolio to discover the company\'s current range of home-care products.',
      },
    ],
    faqs: [
      {
        q: 'What are the main ingredients in detergent powder?',
        a: 'The main ingredient groups in detergent powder typically include surfactants, builders, enzymes, anti-redeposition agents, optical brighteners, fragrance and other formulation or processing aids. Some products may also contain bleaching systems and additional performance additives. Each component has a specific role. Surfactants support soil removal, builders support detergent performance in water, enzymes target particular types of stains, and anti-redeposition agents help prevent removed soil from returning to fabrics. The exact formulation varies according to the product and its intended use.',
      },
      {
        q: 'What makes a detergent powder good quality?',
        a: 'A quality detergent powder combines effective formulation, consistent manufacturing, stable physical properties and reliable cleaning performance. It is not determined by a single ingredient or by foam alone. Quality depends on how the different components work together, how consistently the product is manufactured and how well the finished powder maintains its characteristics during storage and use.',
      },
      {
        q: 'Why are surfactants important in detergent powder?',
        a: 'Surfactants are important because they help water interact with and remove soils from fabrics. They can improve wetting and help loosen, emulsify and suspend different types of dirt during washing. Because different surfactants can provide different performance characteristics, detergent manufacturers may formulate with one or more surfactant types depending on the intended product.',
      },
      {
        q: 'Why are enzymes added to some detergent powders?',
        a: 'Enzymes can help target specific organic stains. For example, proteases can act on protein-based soils, amylases can target starch-based soils and lipases can help break down fats and oils. Their use depends on the product formulation and intended performance. Enzymes are functional ingredients, so they need to be handled and incorporated under suitable manufacturing conditions to maintain their activity.',
      },
      {
        q: 'How does MSIPL contribute to the detergent and home-care category?',
        a: 'Maharaj Soaps Industries Private Limited is an FMCG manufacturer based in Davangere, Karnataka, with a home-care and hygiene portfolio that includes washing powders, detergent soaps, liquid detergents, dishwash products and phenyls. Its brands include Shashi and Savaal. The current MSIPL portfolio includes products such as Savaal Gold Washing Powder, Savaal 999 Washing Powder, Savaal Blue and White pouches, and several Shashi detergent products. To explore the available range, visit the MSIPL Products page.',
      },
    ],
  },

  {
    slug: 'fmcg-brands-owned-by-msipl-group',
    title: 'What FMCG Brands Does MSIPL Group Own?',
    metaDescription:
      'Discover the FMCG brands owned by MSIPL Group, including Shashi and Savaal, and explore their range of detergent, washing powder and dishwash products.',
    image: '/images/Mahraja_Banner_new.webp',
    imageAlt: 'Maharaja Soaps Industry brand banner',
    blocks: [
      { type: 'heading', level: 2, text: 'What FMCG Brands Does MSIPL Group Own?' },
      {
        type: 'p',
        text: 'When people search for MSIPL Group, they may come across a range of detergent, washing and home-care products rather than a single product category. That is because Maharaj Soaps Industries Private Limited (MSIPL) has built its FMCG portfolio around everyday home-care and hygiene needs.',
      },
      {
        type: 'p',
        text: "According to the company's website, MSIPL has been manufacturing home-care and hygiene products since 2000. Its product range includes detergent soaps, washing powders, liquid detergents, dishwash bars and phenyls, sold under brands including Shashi and Savaal. The two brands identified by MSIPL are:",
      },
      { type: 'list', items: ['Shashi', 'Savaal'] },
      {
        type: 'p',
        text: "Each brand has its own set of products within the company's home-care portfolio. The current MSIPL website showcases products under both names, including detergent cakes, washing powders, pouches and dishwash products.",
      },
      {
        type: 'p',
        text: 'So, if you are looking for a simple answer to "What FMCG brands does MSIPL Group own?", the answer is: MSIPL\'s FMCG brand portfolio includes Shashi and Savaal. But there is more to the portfolio than the brand names alone.',
      },

      { type: 'heading', level: 2, text: 'Who Is MSIPL Group?' },
      {
        type: 'p',
        text: "Maharaj Soaps Industries Private Limited, represented online as MSIPL Group, is an FMCG manufacturer based in Davangere, Karnataka. The company's website describes its focus around home-care and hygiene products and identifies its manufacturing history as dating back to 2000. The company's current portfolio is centred on products used in everyday household cleaning. These include:",
      },
      { type: 'list', items: ['Detergent cakes', 'Washing powders', 'Detergent pouches', 'Dishwash products', 'Liquid detergents', 'Other home-care products'] },
      {
        type: 'p',
        text: "Rather than operating around a single cleaning format, MSIPL's portfolio covers several forms of household cleaning products. This allows its brands to serve different everyday washing and cleaning requirements. The company's website currently presents its portfolio through two primary brand identities: Shashi and Savaal.",
      },

      { type: 'heading', level: 2, text: 'Shashi: Everyday Home-Care Products' },
      {
        type: 'p',
        text: "Shashi is one of the FMCG brands listed by MSIPL. The brand's products on the company's website are focused primarily on everyday laundry and dishwashing needs. The current Shashi range includes products designed for different cleaning applications and formats. These include detergent cakes, pouches, bullet sets and dishwash powder. The product range includes:",
      },
      {
        type: 'list',
        items: [
          'Shashi Pink M-Lore Detergent Cake', 'Shashi Pink Pouch', 'Shashi Pink Bullet Set',
          'Shashi Arya Blue Detergent Cake', 'Shashi Scouring Dishwash Powder',
        ],
      },
      {
        type: 'p',
        text: 'The variety within the Shashi portfolio is important. It shows that the brand is not limited to one detergent format. Instead, it covers multiple everyday cleaning occasions—from washing clothes to cleaning utensils.',
      },

      { type: 'heading', level: 2, text: 'What Products Does Shashi Offer?' },
      {
        type: 'list',
        items: [
          'Shashi Pink M-Lore Detergent Cake — Positioned on the MSIPL website as a detergent cake designed for daily washing. Its product description highlights everyday dirt removal while helping keep clothes fresh and well maintained. For consumers who prefer a solid detergent format for handwashing, detergent cakes remain a familiar part of household laundry routines.',
          'Shashi Pink Pouch — A compact detergent format intended for everyday use. Its smaller format provides a convenient way to purchase and use detergent powder without requiring a larger pack. MSIPL describes it as a compact detergent pouch designed around everyday cleaning performance.',
          'Shashi Pink Bullet Set — Positioned for hand-wash cleaning and described by MSIPL as a product designed to tackle tough stains and grease while maintaining fabric quality and freshness. Its format gives the Shashi portfolio another option within the laundry-care category.',
          'Shashi Arya Blue Detergent Cake — Positioned around deep cleaning and stubborn stain removal. Described on the MSIPL website as a detergent cake designed to remove stubborn stains while keeping clothes bright, giving Shashi a product positioned around more intensive cleaning needs.',
          'Shashi Scouring Dishwash Powder — Shashi is not limited to laundry. This product is designed for utensil cleaning, intended to remove grease and food residue efficiently while leaving utensils clean and hygienic — making the Shashi portfolio broader than a traditional laundry-only brand.',
        ],
      },

      { type: 'heading', level: 2, text: 'Savaal: Washing and Cleaning Essentials' },
      {
        type: 'p',
        text: 'Savaal is the second FMCG brand identified by MSIPL. While Shashi has products across laundry and dishwashing, the current Savaal portfolio shown on the MSIPL website is particularly focused on washing powders and detergent cakes. The range currently includes:',
      },
      {
        type: 'list',
        items: [
          'Savaal Gold Washing Powder', 'Savaal 999 Washing Powder', 'Savaal Blue Pouch',
          'Savaal White Pouch', 'Savaal Max Blue Detergent Cake',
        ],
      },
      { type: 'p', text: 'The products cover different formats, from washing powders to pouches and detergent cakes.' },

      { type: 'heading', level: 2, text: 'What Products Does Savaal Offer?' },
      {
        type: 'list',
        items: [
          'Savaal Gold Washing Powder — Positioned as a premium washing powder within the Savaal portfolio. MSIPL describes it as a washing powder designed for superior cleanliness and freshness, sitting within the washing-powder segment of the Savaal range.',
          'Savaal 999 Washing Powder — Positioned around high-performance washing and tough stain removal. Described as a high-performance washing powder designed to address tough stains, and one of the key washing-powder products within the Savaal portfolio.',
          'Savaal Blue Pouch — Provides a compact washing-powder format. MSIPL positions it as a compact and economical option for daily household use, designed around convenience and everyday accessibility.',
          'Savaal White Pouch — Another washing-powder format within the Savaal portfolio, described as a white detergent pouch designed for everyday fabric care. Together, the Savaal pouch products extend the brand beyond larger washing-powder formats.',
          'Savaal Max Blue Detergent Cake — A solid detergent format within the Savaal portfolio, positioned around powerful stain removal and designed for consumers who prefer detergent cakes for washing — giving Savaal representation across both powdered and solid detergent formats.',
        ],
      },

      { type: 'heading', level: 2, text: 'What Is the Difference Between Shashi and Savaal?' },
      {
        type: 'p',
        text: 'A common question when exploring MSIPL\'s portfolio is: "Are Shashi and Savaal the same brand?" No. They are presented as separate brands within MSIPL\'s FMCG portfolio. Both operate within the broader home-care category, but each has its own product identity and range.',
      },
      {
        type: 'table',
        headers: ['Brand', 'Key Product Categories', 'Examples'],
        rows: [
          ['Shashi', 'Detergent cakes, detergent pouches, bullet sets, dishwash powder', 'Pink M-Lore, Pink Pouch, Arya Blue, Scouring Dishwash Powder'],
          ['Savaal', 'Washing powders, pouches, detergent cakes', 'Gold Washing Powder, 999 Washing Powder, Blue Pouch, White Pouch, Max Blue'],
        ],
      },
      {
        type: 'p',
        text: 'Product availability and portfolio may change. The table reflects products currently presented on the MSIPL website. The distinction between the two brands allows MSIPL to build a broader FMCG presence without placing every product under a single consumer-facing identity.',
      },

      { type: 'heading', level: 2, text: 'Why Does MSIPL Have Multiple FMCG Brands?' },
      { type: 'p', text: 'A company can have multiple brands for several strategic reasons. For an FMCG manufacturer, different brands can serve different consumer needs, product formats and market positions. A multi-brand portfolio can provide room for:' },
      {
        type: 'list',
        items: [
          'Different Product Positions — One brand can be positioned around one set of consumer expectations while another can occupy a different position.',
          'Different Product Formats — Consumers do not all purchase cleaning products in the same format. Some prefer powders. Others prefer detergent cakes or smaller pouches. A broader brand portfolio can accommodate these different formats.',
          'Different Household Needs — Laundry and dishwashing are related home-care categories, but the cleaning requirements are different. A portfolio can address both.',
          "Wider Market Coverage — Multiple products and brands can give a manufacturer greater flexibility in reaching different segments of the FMCG market.",
        ],
      },
      { type: 'p', text: 'For MSIPL, the combination of Shashi and Savaal creates a portfolio across several everyday home-care categories.' },

      { type: 'heading', level: 2, text: 'What Product Categories Does MSIPL Manufacture?' },
      { type: 'p', text: "The MSIPL website identifies its broader home-care and hygiene portfolio as including:" },
      {
        type: 'list',
        items: [
          'Detergent Soaps — Solid detergent products designed for laundry cleaning.',
          'Washing Powders — Powder detergents intended for household washing.',
          'Liquid Detergents — Liquid-format cleaning products.',
          'Dishwash Products — Products designed for cleaning utensils and kitchenware.',
          'Phenyls — Home-care products intended for cleaning applications.',
        ],
      },
      {
        type: 'p',
        text: "The company's terms page specifically identifies detergent soaps, washing powders, liquid detergents, dishwash bars and phenyls as part of its product range. This means MSIPL's FMCG portfolio extends beyond one type of detergent.",
      },

      { type: 'heading', level: 2, text: "MSIPL's FMCG Portfolio at a Glance" },
      {
        type: 'table',
        headers: ['Brand', 'Product Type', 'Product Examples'],
        rows: [
          ['Shashi', 'Detergent Cake', 'Pink M-Lore Detergent Cake'],
          ['Shashi', 'Detergent Pouch', 'Pink Pouch'],
          ['Shashi', 'Detergent Bullet Set', 'Pink Bullet Set'],
          ['Shashi', 'Detergent Cake', 'Arya Blue Detergent Cake'],
          ['Shashi', 'Dishwash', 'Scouring Dishwash Powder'],
          ['Savaal', 'Washing Powder', 'Gold Washing Powder'],
          ['Savaal', 'Washing Powder', '999 Washing Powder'],
          ['Savaal', 'Washing Powder Pouch', 'Blue Pouch'],
          ['Savaal', 'Washing Powder Pouch', 'White Pouch'],
          ['Savaal', 'Detergent Cake', 'Max Blue Detergent Cake'],
        ],
      },
      { type: 'p', text: 'Based on the current product information displayed on the MSIPL website.' },

      { type: 'heading', level: 2, text: "How MSIPL Builds Its FMCG Portfolio" },
      {
        type: 'p',
        text: 'The FMCG category is built around products that become part of everyday routines. Laundry. Dishwashing. Home cleaning. These are recurring household activities, which means consumers need products that are easy to understand, easy to use and consistently available.',
      },
      {
        type: 'p',
        text: "MSIPL's portfolio reflects this everyday-use approach. The company has developed product formats across powders, cakes and pouches rather than relying on a single form of detergent. This gives its brands room to address different usage preferences. The result is a portfolio that can be viewed at two levels: Brand level (Shashi and Savaal) and Product level (detergent cakes, washing powders, pouches and dishwash products). That structure is useful for understanding the company as an FMCG manufacturer rather than simply as a detergent company.",
      },

      { type: 'heading', level: 2, text: "Where Can You Find MSIPL's FMCG Products?" },
      {
        type: 'p',
        text: "The official MSIPL website provides a dedicated product section where the company's current FMCG portfolio can be explored. The MSIPL Products page presents products from both Shashi and Savaal, including detergent cakes, washing powders, pouches and dishwash products. For the most current product information, the Products page should be treated as the primary reference because FMCG portfolios can evolve over time.",
      },

      { type: 'heading', level: 2, text: 'Conclusion' },
      {
        type: 'p',
        text: "MSIPL Group's FMCG portfolio is built around two primary consumer-facing brands: Shashi and Savaal. Together, these brands represent MSIPL's presence across everyday home-care and cleaning categories. Shashi currently includes detergent cakes, pouches, a detergent bullet set and dishwash powder. Savaal includes washing powders, detergent pouches and detergent cakes. The broader MSIPL portfolio also encompasses product categories such as detergent soaps, liquid detergents, dishwash products and phenyls.",
      },
      {
        type: 'p',
        text: 'For consumers, retailers and business partners looking to understand the company\'s FMCG offering, the distinction is simple: MSIPL is the manufacturer. Shashi and Savaal are the brands. Their products serve everyday home-care and cleaning needs. To explore the current portfolio, visit the MSIPL Products page. As the product portfolio develops, the official Products page remains the best place to discover the latest products available from MSIPL.',
      },
    ],
    faqs: [
      {
        q: 'What FMCG brands does MSIPL Group own?',
        a: "MSIPL Group's website identifies Shashi and Savaal as its trusted FMCG brands. The company manufactures home-care and hygiene products under these brands, including detergent soaps, washing powders, detergent cakes, pouches and dishwash products.",
      },
      {
        q: 'Is Shashi an MSIPL brand?',
        a: "Yes. Shashi is a brand of Maharaj Soaps Industries Private Limited (MSIPL). The current Shashi portfolio displayed on the company's website includes detergent cakes, detergent pouches, a detergent bullet set and scouring dishwash powder.",
      },
      {
        q: 'Is Savaal an MSIPL brand?',
        a: 'Yes. Savaal is one of the FMCG brands identified by MSIPL. Its current product portfolio includes Savaal Gold Washing Powder, Savaal 999 Washing Powder, Savaal Blue Pouch, Savaal White Pouch and Savaal Max Blue Detergent Cake.',
      },
      {
        q: 'What products does MSIPL manufacture?',
        a: "MSIPL's website identifies detergent soaps, washing powders, liquid detergents, dishwash bars and phenyls among its home-care and hygiene product categories. Its current online product portfolio also includes specific Shashi and Savaal detergent cakes, washing powders, pouches and dishwash products.",
      },
      {
        q: 'Where is MSIPL Group based?',
        a: "Maharaj Soaps Industries Private Limited is based in Davangere, Karnataka, India. The company's website lists its location as Plot No. 2051/A, Lokikere Main Road, near Industrial Area, Davangere, Karnataka 577005.",
      },
    ],
  },

  {
    slug: 'how-msipl-maintains-quality-in-fmcg-products',
    title: 'How Does MSIPL Maintain Quality in Its FMCG Products?',
    metaDescription:
      'Discover how MSIPL approaches quality across its FMCG portfolio, from raw materials and formulation to manufacturing, quality checks, packaging and everyday product performance.',
    image: '/images/factory page.webp',
    imageAlt: 'Inside the MSIPL manufacturing facility',
    blocks: [
      { type: 'heading', level: 2, text: 'How Does MSIPL Maintain Quality in Its FMCG Products?' },
      {
        type: 'p',
        text: 'Quality in FMCG is experienced differently from quality in many other industries. A consumer may use a detergent powder several times a week. A detergent cake may become part of a daily washing routine. A dishwash product may be used every day. There is very little room for inconsistency. The product needs to perform as expected each time it is used.',
      },
      {
        type: 'p',
        text: "For Maharaj Soaps Industries Private Limited (MSIPL), quality is therefore closely connected to the way its home-care and hygiene products are developed, manufactured and brought to consumers. MSIPL's website states that the company has been manufacturing home-care and hygiene products since 2000. Its portfolio includes washing powders, detergent soaps, liquid detergents, dishwash products and phenyls, with brands including Shashi and Savaal.",
      },
      {
        type: 'p',
        text: "But what does maintaining quality actually mean for an FMCG manufacturer? It goes beyond the finished pack. Quality begins with the materials that go into a product. It continues through formulation, manufacturing, consistency checks and packaging. It ultimately reaches the consumer through the product's everyday performance. In simple terms: quality is built into the process, not added at the end.",
      },

      { type: 'heading', level: 2, text: 'What Does Quality Mean in FMCG Manufacturing?' },
      { type: 'p', text: 'When someone says that an FMCG product is "high quality," the phrase can mean several different things. For a home-care product, quality can include:' },
      {
        type: 'list',
        items: [
          'Consistent product performance', 'Appropriate formulation', 'Reliable raw materials', 'Controlled manufacturing',
          'Consistent physical characteristics', 'Stable fragrance and appearance', 'Suitable packaging',
          'Product integrity during storage', 'Reliable consumer experience',
        ],
      },
      {
        type: 'p',
        text: 'For a detergent powder, for example, quality may involve more than stain removal. The powder needs to have the intended formulation. It needs to remain usable during storage. It should have appropriate flow characteristics. Its fragrance and appearance should remain consistent. Its packaging should help protect the product. The same principle applies across other FMCG categories. Quality is a combination of product performance, consistency and reliability.',
      },

      { type: 'heading', level: 2, text: "MSIPL's Approach to Product Quality" },
      {
        type: 'p',
        text: "MSIPL operates in categories where consistency matters. The company manufactures products intended for everyday household use. Its website identifies its portfolio across home-care and hygiene categories, including detergent soaps, washing powders, liquid detergents, dishwash products and phenyls. This means product quality needs to be considered at multiple stages. A useful way to understand the process is through five connected areas:",
      },
      {
        type: 'list',
        items: [
          'Raw Materials — The starting point of product quality.',
          'Formulation — The combination and balance of ingredients.',
          'Manufacturing — The process used to turn the formulation into a finished product.',
          'Quality Control — The checks used to ensure the finished product meets defined requirements.',
          'Packaging — The final layer that protects the product through storage, transportation and use.',
        ],
      },
      { type: 'p', text: 'These stages are connected. If one stage is inconsistent, it can affect the final product.' },

      { type: 'heading', level: 2, text: 'Quality Starts With the Raw Materials' },
      {
        type: 'p',
        text: 'Every FMCG product begins somewhere. For detergent powder, that may mean surfactants, builders, enzymes, fragrances, fillers and other functional ingredients. For a dishwash product, the formulation may be different. The first step toward a consistent finished product is therefore consistency in the materials used to manufacture it. Raw-material quality can influence:',
      },
      { type: 'list', items: ['Cleaning performance', 'Product texture', 'Fragrance', 'Colour', 'Stability', 'Powder flow', 'Physical appearance', 'Shelf behaviour'] },
      {
        type: 'p',
        text: 'This is why responsible FMCG manufacturing cannot treat raw-material selection as an afterthought. The formulation is only as reliable as the materials used to make it. A manufacturer therefore needs defined specifications for the materials entering production and a controlled process for handling them. For consumers, this is invisible. But it is one of the foundations of a consistent product.',
      },

      { type: 'heading', level: 2, text: 'Formulation: Getting the Product Balance Right' },
      { type: 'p', text: 'A detergent is not simply a mixture of cleaning chemicals. It is a formulation. Each ingredient has a role, and the relationship between ingredients matters. For example, in a detergent powder:' },
      {
        type: 'list',
        items: [
          'Surfactants support soil removal.', 'Builders support cleaning performance in water.',
          'Enzymes can target specific organic soils.', 'Anti-redeposition agents help keep removed soil suspended.',
          'Optical brighteners can support fabric appearance.', 'Fragrance contributes to the sensory experience.',
          'Processing aids can influence powder characteristics.',
        ],
      },
      {
        type: 'p',
        text: 'The exact combination depends on the product. This is why two products can belong to the same category while having different formulations. A quality-focused manufacturer needs to maintain the intended formulation consistently. The objective is not simply to add more of one ingredient. It is to create the right balance for the intended product.',
      },

      { type: 'heading', level: 2, text: 'Controlled Manufacturing Matters' },
      {
        type: 'p',
        text: 'A good formulation needs a controlled manufacturing process. This is particularly important in FMCG because production takes place at scale. The product made in one batch should be consistent with the product made in another. Manufacturing controls can involve areas such as:',
      },
      {
        type: 'list',
        items: [
          'Ingredient weighing', 'Batching', 'Mixing', 'Temperature management', 'Moisture control',
          'Granulation or drying, where applicable', 'Addition of sensitive ingredients', 'Final blending', 'Packaging',
        ],
      },
      {
        type: 'p',
        text: 'The specific process depends on the product. For detergent powders, for example, different manufacturing methods can affect particle size, density, moisture and flowability. For liquid products, factors such as mixing, viscosity and stability may become more important. For solid detergent products, the physical properties of the finished cake can be particularly relevant. The manufacturing process therefore needs to be designed around the product being produced.',
      },

      { type: 'heading', level: 2, text: 'Consistency Across Every Batch' },
      {
        type: 'p',
        text: 'One of the clearest signs of quality in FMCG is consistency. Consider a familiar household product. You purchase it this month. You purchase it again next month. You expect it to behave in the same way. That expectation is important. For a detergent powder, batch-to-batch consistency can involve characteristics such as:',
      },
      { type: 'list', items: ['Appearance', 'Colour', 'Fragrance', 'Powder texture', 'Flowability', 'Moisture', 'Cleaning performance', 'Packaging quality'] },
      {
        type: 'p',
        text: 'For other home-care products, different characteristics may be relevant. Consistency does not happen automatically. It comes from having defined processes and specifications, then keeping production within those requirements. This is especially important when products are manufactured repeatedly over long periods.',
      },

      { type: 'heading', level: 2, text: 'Quality Checks Before Products Reach the Market' },
      {
        type: 'p',
        text: 'Quality control provides a bridge between manufacturing and the finished product. A manufacturer needs to know whether the product produced matches the intended specifications. Depending on the product category, quality evaluation can consider factors such as:',
      },
      {
        type: 'list',
        items: [
          'Physical Characteristics — Appearance, colour, texture, density, viscosity or other product-specific characteristics.',
          'Chemical Characteristics — Formulation-related parameters that help verify product consistency.',
          'Performance — The product can be evaluated against relevant performance requirements.',
          'Stability — The product needs to maintain appropriate characteristics during its intended storage period.',
          'Packaging — The finished pack needs to protect the product and remain suitable for transportation and handling.',
        ],
      },
      {
        type: 'p',
        text: 'The exact testing procedures and acceptance criteria are product-specific. That distinction matters. There is no single quality test that applies equally to every FMCG product. A washing powder and a liquid detergent have different physical properties. A dishwash product has a different use case from a detergent cake. Quality control needs to follow the product.',
      },

      { type: 'heading', level: 2, text: 'Packaging Is Part of Product Quality' },
      { type: 'p', text: 'A product can be manufactured correctly and still be compromised if it is not packaged appropriately. Packaging has several functions. It needs to:' },
      { type: 'list', items: ['Protect the product', 'Support storage', 'Reduce exposure to environmental conditions', 'Survive transportation and handling', 'Communicate product information', 'Make the product convenient to use'] },
      {
        type: 'p',
        text: 'For powdered products, protection against moisture can be particularly important. Moisture exposure can contribute to caking and changes in powder handling characteristics. For liquid products, packaging needs to help maintain container integrity and prevent leakage. For detergent cakes, packaging needs to protect the solid product during transportation and storage. This makes packaging part of the quality equation. The product is not finished when manufacturing ends. It is finished when the product reaches the consumer in the intended condition.',
      },

      { type: 'heading', level: 2, text: 'Quality in Detergent and Washing Products' },
      { type: 'p', text: 'Detergent products are among the clearest examples of why FMCG quality requires a complete approach. A washing powder needs to work during a wash cycle. But several factors contribute to that experience.' },
      {
        type: 'list',
        items: [
          'Cleaning Performance — The formulation needs to support removal of everyday soils.',
          'Powder Characteristics — The powder needs to remain practical to handle, measure and use.',
          "Fragrance — Where fragrance is part of the product experience, it needs to remain appropriate through the product's intended life.",
          'Fabric Experience — The formulation needs to be designed for its intended washing application.',
          'Storage Stability — The product should maintain suitable characteristics during storage.',
          'Packaging Integrity — The pack should protect the powder through distribution and household storage.',
        ],
      },
      { type: 'p', text: 'A quality detergent is therefore not defined by a single metric. It is the result of multiple elements working together.' },

      { type: 'heading', level: 2, text: "Quality Across MSIPL's FMCG Portfolio" },
      {
        type: 'p',
        text: "MSIPL's portfolio extends beyond one detergent product. The company's website identifies multiple home-care and hygiene categories. Its current online product portfolio includes products under the Shashi and Savaal brands.",
      },
      { type: 'p', text: 'The Shashi range currently includes products such as:' },
      {
        type: 'list',
        items: ['Shashi Pink M-Lore Detergent Cake', 'Shashi Pink Pouch', 'Shashi Pink Bullet Set', 'Shashi Arya Blue Detergent Cake', 'Shashi Scouring Dishwash Powder'],
      },
      {
        type: 'p',
        text: 'These products span laundry and dishwashing applications. Because the products serve different applications, quality considerations need to be appropriate to each product. A detergent cake has different physical characteristics from a scouring dishwash powder.',
      },
      { type: 'p', text: "Savaal's current portfolio includes:" },
      {
        type: 'list',
        items: ['Savaal Gold Washing Powder', 'Savaal 999 Washing Powder', 'Savaal Blue Pouch', 'Savaal White Pouch', 'Savaal Max Blue Detergent Cake'],
      },
      {
        type: 'p',
        text: 'The range includes washing powders, pouches and detergent cakes. Again, each product needs to be evaluated according to its intended formulation and use. This is an important distinction. Quality does not mean making every product identical. It means making every product consistently meet the requirements for which it was designed.',
      },

      { type: 'heading', level: 2, text: 'How Product Quality Supports Consumer Trust' },
      {
        type: 'p',
        text: 'FMCG products have a unique relationship with consumers. They are purchased frequently. They are used repeatedly. And they become part of routines. That means consumers notice inconsistencies. A washing powder that behaves differently from one purchase to the next can affect trust. A dishwash product that changes in texture can affect the experience. A detergent cake that does not maintain its expected characteristics can change how the product is perceived.',
      },
      {
        type: 'p',
        text: 'Consistency therefore becomes part of the brand experience. This is especially important for brands such as Shashi and Savaal, where the relationship with the consumer is built through repeated everyday use. Quality creates the foundation. Consistency reinforces it. And the experience of using the product brings it to life.',
      },

      { type: 'heading', level: 2, text: "MSIPL's Brands and Product Portfolio" },
      { type: 'p', text: "MSIPL's current website presents Shashi and Savaal as its brands. Together, the brands cover several home-care applications." },
      {
        type: 'table',
        headers: ['Brand', 'Category', 'Examples'],
        rows: [
          ['Shashi', 'Detergent Cakes', 'Pink M-Lore, Arya Blue'],
          ['Shashi', 'Detergent Pouches', 'Pink Pouch'],
          ['Shashi', 'Detergent Format', 'Pink Bullet Set'],
          ['Shashi', 'Dishwash', 'Scouring Dishwash Powder'],
          ['Savaal', 'Washing Powder', 'Gold, 999'],
          ['Savaal', 'Washing Powder Pouches', 'Blue, White'],
          ['Savaal', 'Detergent Cake', 'Max Blue'],
        ],
      },
      {
        type: 'p',
        text: 'Product information reflects the portfolio currently presented on the MSIPL website and may change over time. The broader company portfolio includes home-care and hygiene products across detergent soaps, washing powders, liquid detergents, dishwash products and phenyls.',
      },

      { type: 'heading', level: 2, text: 'What Makes Quality Important in Everyday FMCG Products?' },
      {
        type: 'p',
        text: 'The value of quality becomes particularly clear when a product is used every day. Consumers do not want to think about whether their detergent will perform. They simply expect it to. That is the role of a dependable FMCG product. It should fit naturally into the consumer\'s routine.',
      },
      {
        type: 'p',
        text: 'For a washing powder, that means a product that can be measured, added to the wash and relied upon. For a detergent cake, it means a solid product that is practical to handle and use. For a dishwash product, it means a formulation designed for its intended cleaning application. For the manufacturer, this requires a disciplined approach behind the scenes. The consumer sees the finished product. Quality begins much earlier.',
      },

      { type: 'heading', level: 2, text: 'Quality Is a Process, Not a Single Check' },
      { type: 'p', text: 'The simplest way to understand FMCG quality is to think of it as a chain:' },
      { type: 'p', text: 'Raw materials → Formulation → Manufacturing → Quality Control → Packaging → Distribution → Consumer' },
      {
        type: 'p',
        text: 'Every stage matters. If raw materials are inconsistent, formulation can be affected. If formulation is not controlled, performance can change. If manufacturing varies, batches may differ. If quality checks are insufficient, problems may reach the market. If packaging does not protect the product, quality can deteriorate after manufacturing. This is why quality cannot be reduced to one laboratory test or one final inspection. It is a process that needs to work from beginning to end. For a company manufacturing everyday home-care products, that approach helps create something consumers value most: consistency they can rely on.',
      },

      { type: 'heading', level: 2, text: 'Data Table: Quality Considerations Across FMCG Products' },
      {
        type: 'table',
        headers: ['Quality Area', 'What It Involves', 'Why It Matters'],
        rows: [
          ['Raw Materials', 'Selection and consistency of incoming materials', 'Establishes the foundation for the finished product'],
          ['Formulation', 'Correct balance of functional ingredients', 'Determines intended product characteristics'],
          ['Manufacturing', 'Controlled production processes', 'Helps achieve batch-to-batch consistency'],
          ['Mixing / Processing', 'Uniform distribution and appropriate processing conditions', 'Supports consistent product performance'],
          ['Physical Properties', 'Appearance, texture, moisture, density or viscosity as applicable', 'Affects usability and product stability'],
          ['Performance', 'Product-specific cleaning or functional performance', 'Determines whether the product does what it is designed to do'],
          ['Stability', 'Maintaining intended characteristics during storage', 'Supports product integrity over its intended life'],
          ['Packaging', 'Protection, sealing and handling suitability', 'Helps preserve the product after manufacturing'],
          ['Labelling', 'Product and usage information', 'Supports informed and appropriate use'],
          ['Consumer Experience', 'Performance, handling and sensory characteristics', 'Builds confidence through repeated use'],
        ],
      },
      {
        type: 'p',
        text: 'The specific parameters and quality controls applicable to a product depend on its formulation, category, manufacturing process and applicable requirements.',
      },

      { type: 'heading', level: 2, text: 'Conclusion' },
      { type: 'p', text: 'How does MSIPL maintain quality in its FMCG products? The answer starts with a simple principle: quality needs to be built into the product at every stage.' },
      {
        type: 'p',
        text: 'It begins with appropriate raw materials. It continues with a carefully controlled formulation. It moves through a manufacturing process designed for consistency. It is supported by quality checks appropriate to each product. And it reaches the consumer through packaging that helps protect the finished product.',
      },
      {
        type: 'p',
        text: "For MSIPL, this approach is particularly relevant because its portfolio spans multiple home-care and hygiene categories. The company manufactures products including washing powders, detergent soaps, liquid detergents, dishwash products and phenyls, with its current consumer-facing brands including Shashi and Savaal.",
      },
      {
        type: 'p',
        text: 'Different products have different requirements. A washing powder needs to behave like a washing powder. A detergent cake needs to maintain the characteristics expected from a solid detergent. A dishwash product needs to be formulated for its intended cleaning application. Quality therefore does not mean making every product the same. It means making each product consistently fit for its intended purpose. That is what turns manufacturing into a reliable FMCG experience. To explore MSIPL\'s current portfolio of home-care and cleaning products, visit the MSIPL Products page.',
      },
    ],
    faqs: [
      {
        q: 'How does MSIPL maintain quality in its FMCG products?',
        a: "MSIPL's quality approach can be understood across the complete product lifecycle—from raw-material selection and formulation through manufacturing, quality control and packaging. The company manufactures home-care and hygiene products across several categories, including washing powders, detergent soaps, liquid detergents, dishwash products and phenyls. Maintaining consistency across such a portfolio requires product-specific formulation and manufacturing controls.",
      },
      {
        q: 'Does MSIPL manufacture its own FMCG products?',
        a: 'Yes. Maharaj Soaps Industries Private Limited describes itself as a manufacturer of home-care and hygiene products and states that it has been manufacturing these products since 2000. Its website currently showcases products under the Shashi and Savaal brands.',
      },
      {
        q: 'What types of FMCG products does MSIPL manufacture?',
        a: "MSIPL's website identifies detergent soaps, washing powders, liquid detergents, dishwash products and phenyls among its home-care and hygiene categories. The company's current online portfolio includes detergent cakes, washing powders, pouches and dishwash products under the Shashi and Savaal brands.",
      },
      {
        q: "Which brands are part of MSIPL's FMCG portfolio?",
        a: "The MSIPL website currently identifies Shashi and Savaal as its brands. Shashi's portfolio includes detergent cakes, pouches, a bullet set and dishwash powder, while Savaal's portfolio includes washing powders, pouches and detergent cakes.",
      },
      {
        q: 'Why is consistency important for FMCG product quality?',
        a: 'FMCG products are often purchased and used repeatedly. Consistency ensures that consumers can expect the product to maintain its intended characteristics and performance from one purchase to the next. For home-care products, this can include consistent cleaning performance, appearance, fragrance, texture, handling characteristics and packaging integrity, depending on the product category.',
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((b) => b.slug === slug);
}

/** Approximate reading time from actual word count (~200 wpm), not a fabricated figure. */
export function getReadingTime(post: BlogPost): number {
  const words = post.blocks.reduce((count, block) => {
    if (block.type === 'p' || block.type === 'heading') {
      return count + block.text.split(/\s+/).filter(Boolean).length;
    }
    if (block.type === 'list') {
      return count + block.items.join(' ').split(/\s+/).filter(Boolean).length;
    }
    if (block.type === 'table') {
      return count + block.rows.flat().join(' ').split(/\s+/).filter(Boolean).length;
    }
    return count;
  }, 0);
  return Math.max(1, Math.round(words / 200));
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Section headings (level 2) for a "On this page" table of contents. */
export function getTableOfContents(post: BlogPost) {
  return post.blocks
    .filter((b): b is Extract<BlogBlock, { type: 'heading' }> => b.type === 'heading' && b.level === 2)
    .map((b) => ({ id: slugifyHeading(b.text), text: b.text }));
}
