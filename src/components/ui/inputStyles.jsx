export const inputBase = (err = false, extra = "") =>
    `w-full rounded-sm border px-3.5 py-3 text-sm text-slate-800
   placeholder:text-slate-300 outline-none transition-all duration-150
   focus:ring-1 focus:ring-[#fe5800]
   ${err ? "border-red-300 bg-red-50/50" : "border-slate-200 hover:border-slate-300"}
   ${extra}`;


export const StepDots = ({ current, total = 3 }) => (
    <div className="flex justify-center gap-1.5 mb-6">
        {[...Array(total)].map((_, i) => (
            <div
                key={i}
                className={`h-1 rounded-full transition-all duration-300
             ${i < current ? "w-6 bg-royalorange" : "w-6 bg-slate-200"}`}
            />
        ))}
    </div>
);


export const inputCls =
    "w-full border border-slate-200 rounded-sm text-[.75rem] text-slate-700 font-medium px-3 py-2.5 bg-white " +
    "focus:outline-none focus:border-royalorange/20 focus:ring-1 focus:ring-royalorange/20 transition-all placeholder:text-slate-300";


export const insideInputBase = (err = false, extra = "") =>
    `w-full rounded-sm border px-3 py-2.5 text-sm text-slate-800
   placeholder:text-slate-300 outline-none transition-all duration-150
   focus:ring-1 focus:ring-[#fe5800]
   ${err ? "border-red-300 bg-red-50/50" : "border-slate-200 hover:border-slate-300"}
   ${extra}`;
