import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"

const LANGUAGE_DATA = {
  JavaScript: { color: "#f1e05a", abbr: "JS" },
  TypeScript: { color: "#3178c6", abbr: "TS" },
  Python: { color: "#3572A5", abbr: "PY" },
  Java: { color: "#b07219", abbr: "JV" },
  "C++": { color: "#f34b7d", abbr: "C++" },
  C: { color: "#555555", abbr: "C" },
  Go: { color: "#00ADD8", abbr: "GO" },
  Rust: { color: "#dea584", abbr: "RS" },
  PHP: { color: "#4F5D95", abbr: "PHP" },
  Ruby: { color: "#701516", abbr: "RB" },
  Swift: { color: "#F05138", abbr: "SW" },
  Kotlin: { color: "#A97BFF", abbr: "KT" },
  HTML: { color: "#e34c26", abbr: "HT" },
  CSS: { color: "#563d7c", abbr: "CS" },
  Shell: { color: "#89e051", abbr: "SH" },
};

const DEFAULT_COLORS = [
  "#7c3aed", "#4f46e5", "#6366f1", "#a78bfa", "#818cf8", "#c4b5fd", "#312e81"
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0].payload
    return (
      <div className="px-3 py-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-lg text-sm">
        <p className="font-bold text-gray-900 dark:text-white">{name}</p>
        <p className="text-violet-500 font-semibold">{value} {value === 1 ? "repo" : "repos"}</p>
      </div>
    )
  }
  return null
}

export default function LanguageChart({ languages }) {
  if (!languages || Object.keys(languages).length === 0) return null

  const data = Object.entries(languages)
    .map(([name, value], index) => {
      const langInfo = LANGUAGE_DATA[name] || {
        color: DEFAULT_COLORS[index % DEFAULT_COLORS.length],
        abbr: name.substring(0, 2).toUpperCase()
      };
      return { name, value, ...langInfo };
    })
    .sort((a, b) => b.value - a.value);

  const totalRepos = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl p-8 transition-all hover:shadow-2xl hover:shadow-violet-500/5">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Language Distribution</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">Primary languages across {totalRepos} repositories</p>
        </div>
        <div className="px-3 py-1 bg-violet-50 dark:bg-violet-900/30 rounded-full">
          <span className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">Analysis</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={75}
                  outerRadius={105}
                  paddingAngle={4}
                  strokeWidth={0}
                  animationDuration={1500}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} shape="circle" />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl font-black text-gray-900 dark:text-white">{data.length}</span>
              <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Languages</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {data.map((lang, index) => {
              const pct = Math.round((lang.value / totalRepos) * 100);
              return (
                <div 
                  key={lang.name}
                  className="group flex items-center justify-between p-3 rounded-2xl bg-gray-50/50 dark:bg-gray-800/40 border border-gray-100/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs text-white shadow-lg shrink-0 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: lang.color, boxShadow: `0 4px 12px ${lang.color}44` }}
                    >
                      {lang.abbr}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-gray-100">{lang.name}</p>
                      <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-tighter">{lang.value} {lang.value === 1 ? 'Repository' : 'Repositories'}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-black text-gray-900 dark:text-white">{pct}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}