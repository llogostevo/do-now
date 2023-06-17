import Image from 'next/image'

export default function Home() {
  return (
   <main>
  <div
  className="rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 grid grid-cols-4 gap-x-12">
  <div className="flex flex-col items-center justify-center col-span-3">
  <h5 className="mb-2 text-xs font-medium leading-tight text-neutral-800 dark:text-neutral-50">
    Geography - Edexcel - Unit 1
  </h5>
  <h1 className="mb-2 text-xl">Do Now</h1>
  <h1 className="mb-2 text-4xl">Write what you know</h1>
  <div className="flex items-center justify-center h-full">
    <p className="mb-4 text-4xl bg-gray-200 p-4 text-black">
    Characteristics and distribution of the UK’s main rock types:
sedimentary (chalk, sandstone) igneous (basalt, granite),
metamorphic (schists, slates).
    </p>
  </div>
</div>
  <div col-span-1>
    <h5 
      className="mb-2 text-xs font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      Guiding Questions
    </h5>
    <ul className="flex flex-col gap-3">
  <li className="bg-gray-200 p-4 text-black">
    <ul className="flex flex-col gap-3">
      <li className="text-xl">Knowledge / Comprehension (4)</li>
      <li>Identify key features</li>
      <li className="w-1/2">Explain reasons/use/purpose</li>
      <li className="w-1/2">Give examples / sketch / annotate </li>
    </ul>
  </li>
  <li className="bg-gray-200 p-4 text-black">
    <ul className="flex flex-col gap-3">
      <li className="text-xl">Analyse (5 / 6)</li>
      <li className="w-1/2">Compare with…. (?)</li>
    </ul>
  </li>
  <li className="bg-gray-200 p-4 text-black">
    <ul className="flex flex-col gap-3">
      <li className="text-xl">Evaluate (6+)</li>
      <li className="w-1/2">Anaylse / Support / Criticise / Recommend…(?)</li>
      <li className="w-1/2">Justify against ….(?)</li>
    </ul>
  </li>
  <li className="bg-gray-200 p-4 text-black">Explain any potential connections to other parts of the specification?</li>
</ul>

  </div>
</div>
    </main>
  )
}
