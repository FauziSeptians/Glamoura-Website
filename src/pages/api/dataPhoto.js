// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
   const DataPhotoObject = [
      {
         photoImage: "1.jpeg",
         marginTop: "5%",
         headerText: "lorem",
         DescriptionText:
            "Dapatkan kepercayaan diri yang berkilau dengan alat kecantikan inovatif kami. Temukan teknologi canggih untuk merawat kulit dan rambut, dan ungkap kecantikan alami Anda.",
      },
      {
         photoImage: "2.jpeg",
         marginTop: "2.5%",
         headerText: "lorem1",
         DescriptionText:
            "Dapatkan kepercayaan diri yang berkilau dengan alat kecantikan inovatif kami. Temukan teknologi canggih untuk merawat kulit dan rambut, dan ungkap kecantikan alami Anda.",
      },
      {
         photoImage: "3.jpeg",
         marginTop: "0%",
         headerText: "lorem2",
         DescriptionText:
            "Dapatkan kepercayaan diri yang berkilau dengan alat kecantikan inovatif kami. Temukan teknologi canggih untuk merawat kulit dan rambut, dan ungkap kecantikan alami Anda.",
      },
      {
         photoImage: "3.jpeg",
         marginTop: "0%",
         headerText: "lorem2",
         DescriptionText:
            "Dapatkan kepercayaan diri yang berkilau dengan alat kecantikan inovatif kami. Temukan teknologi canggih untuk merawat kulit dan rambut, dan ungkap kecantikan alami Anda.",
      },
      
   ];
   res.status(200).json({ data : DataPhotoObject });
}
