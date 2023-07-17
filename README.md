This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## TODO:  
Diese Punkte hätte ich noch gemacht:
- 4711 hard gecoded
- Form Validation für alle Felder ( Beispiel bei Login -> wenn falsches PW kommt Fehlermeldung)
- einige Tailwind Anpassungen (Cards sind nicht komplett gleich groß, da die erste Überschrift größer ist als die anderen)
- Vorauswahl einer Karte passend zur aktuell genutzten Lizenzversion. ( Zur Zeit nur eine Auswahl möglich, jedoch kann man neben dem Auswahl noch ein Dropdown mit Anzahl machen)
- Mailadresse mit Checkbox -> wollen Sie eine aktuelle Mailadresse eingeben? Input wäre dann solange disabled.
- 3 Buttons als Möglichkeit mit jeweils 3 verschiedenen PUTS -> man könnte auch ein Dropdown mit der gewünschten Änderung machen und nur ein submit button
- Vielen Dank Komponente komplett provisorisch. Das kann man noch schöner und besser darstellen -> jedoch war mir die Möglichkeit wichtig und nicht der Design hier.
- Viel hardcoded Stuff -> könnte man dynamisch anzeigen lassen ( vorallem wenn man i118n hat, müsste man das über eine json auslesen)
- so gut wie möglich auf Variablen und co geachtet, jedoch war die Zeitangabe sehr straff und deshalb viel heruntergecoded.
- keine Sicherheitsaspekte 



