import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, MessageCircle, Github, Trophy, Award, Briefcase, Code, User, Star, Clock } from "lucide-react"
import { PrintButton } from "@/components/print-button"
import { ContactButtons } from "@/components/contact-buttons"

export default function ITResumeLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white print:bg-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl relative">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12">
          <div className="flex-shrink-0">
            <div className="relative">
              <Image
                src="/placeholder-user.jpg"
                alt="Профильное фото"
                width={200}
                height={200}
                className="rounded-2xl border-4 border-slate-600"
              />
            </div>
            <div className="mt-4 w-full text-center print:hidden lg:hidden">
              <PrintButton />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-2">
              <h1 className="text-4xl lg:text-5xl font-bold print:text-black">Эмиль Набиуллин</h1>
              <div className="print:hidden hidden lg:block">
                <PrintButton />
              </div>
            </div>
            <p className="text-xl text-slate-300 mb-4 print:text-gray-700">Full-Stack разработчик</p>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
              <Badge variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white print:bg-gray-200 print:text-black">
                <User className="w-4 h-4 mr-1" />
                Full-Stack
              </Badge>
              <Badge variant="secondary" className="bg-emerald-600 hover:bg-emerald-700 text-white print:bg-gray-200 print:text-black">
                <Briefcase className="w-4 h-4 mr-1" />
                5+ лет опыта
              </Badge>
              <Badge variant="secondary" className="bg-amber-600 hover:bg-amber-700 text-white print:bg-gray-200 print:text-black">
                <MapPin className="w-4 h-4 mr-1" />
                Иннополис
              </Badge>
              <Badge variant="secondary" className="bg-purple-600 hover:bg-purple-700 text-white print:bg-gray-200 print:text-black">
                <Star className="w-4 h-4 mr-1" />
                Middle+
              </Badge>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="mailto:deldore.emil@yandex.ru">
                <Button variant="outline" size="sm" className="border-slate-600 hover:bg-slate-700 bg-transparent print:text-black print:border-gray-400">
                  <Mail className="w-4 h-4 mr-1" />
                  deldore.emil@yandex.ru
                </Button>
              </a>
              <a href="https://t.me/PresidentOfTatarstan" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="border-slate-600 hover:bg-slate-700 bg-transparent print:text-black print:border-gray-400">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  PresidentOfTatarstan
                </Button>
              </a>
              <a href="https://github.com/Deldore" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="border-slate-600 hover:bg-slate-700 bg-transparent print:text-black print:border-gray-400">
                  <Github className="w-4 h-4 mr-1" />
                  Deldore
                </Button>
              </a>
              <Button variant="outline" size="sm" className="border-slate-600 hover:bg-slate-700 bg-transparent print:text-black print:border-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                Part-Time
              </Button>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="bg-white p-4 rounded-lg">
              <Image
                src="https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=https://t.me/PresidentOfTatarstan"
                alt="QR Code для Telegram @PresidentOfTatarstan"
                width={128}
                height={128}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center print:text-black">
            <Code className="w-8 h-8 mr-3 text-blue-400" />
            Технологический стек
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "React", color: "bg-blue-600" },
              { name: "NestJS", color: "bg-red-600" },
              { name: "Next.js", color: "bg-slate-700" },
              { name: "TypeScript", color: "bg-blue-700" },
              { name: "Node.js", color: "bg-emerald-600" },
              { name: "PostgreSQL", color: "bg-blue-600" },
              { name: "MongoDB", color: "bg-emerald-600" },
              { name: "Docker", color: "bg-blue-500" },
              { name: "Git", color: "bg-slate-600" },
              { name: "Laravel", color: "bg-red-600" },
              { name: "HTML5", color: "bg-amber-600" },
              { name: "CSS3", color: "bg-blue-600" },
            ].map((tech) => (
              <Badge
                key={tech.name}
                className={`${tech.color} text-white justify-center py-3 px-4 text-sm font-medium h-10 flex items-center print:bg-gray-200 print:text-black`}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center print:text-black">
            <Briefcase className="w-8 h-8 mr-3 text-emerald-400" />
            Опыт работы
          </h2>
          <div className="space-y-6">
            {[
                {
                company: "GeoPager/GeoPixel",
                position: "Middle Full-Stack Developer",
                period: "сентябрь 2025 - настоящее время",
                description:
                  "Разработка модели машинного обучения для определения координат трекеров по уровню связи; Написание API и веб-приложения для отрисовки этих координат на локальной карте.",
                color: "border-l-red-500",
              },
              {
                company: "440.dev",
                position: "Middle+ Full-Stack Developer",
                period: "март 2025 - настоящее время",
                description:
                  "Разработка и поддержка веб-приложения на Nest/React.js для криптообменников",
                color: "border-l-blue-500",
              },
              {
                company: "ООО \"СЕОМЕТРИКА\"",
                position: "Full-Stack Developer",
                period: "август 2024 - декабрь 2024",
                description:
                  "Создание веб-решений для аналитики и мониторинга развития бизнесов.",
                color: "border-l-emerald-500",
              },
              {
                company: "Web-Разработка",
                position: "Фриланс",
                period: "2022 - август 2024",
                description: "Разработка сайтов под ключ",
                color: "border-l-amber-500",
              },
            ].map((job, index) => (
              <Card key={index} className={`bg-slate-800 border-slate-700 border-l-4 ${job.color} print:bg-gray-100 print:border-gray-300`}>
                <CardHeader>
                  <CardTitle className="text-white print:text-black">{job.position}</CardTitle>
                  <CardDescription className="text-slate-300 print:text-gray-700">
                    {job.company} • {job.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 print:text-gray-700">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center print:text-black">
            <Star className="w-8 h-8 mr-3 text-amber-400" />
            Портфолио
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "ПО для трекинга сотдруников Я.Лавка",
                description:
                  "Разработка модели машинного обучения для определения координат трекеров по уровню связи; Написание API и веб-приложения для отрисовки этих координат на локальной карте",
                tech: ["TenserFlow", "NestJS", "ReactJS", "Canvas API"],
                color: "bg-gradient-to-br from-emerald-600 to-emerald-700",
              },
              {
                title: "Электронный дневник для частной школы \"Ашкола\"",
                description:
                  "Полнофункциональное веб-приложение электронный дневник для частной школы.",
                tech: ["React", "Laravel", "PostgreSQL"],
                color: "bg-gradient-to-br from-red-600 to-red-700",
              },
              {
                title: "Криптокошелек SwissCrypto",
                description: "Веб-приложение для криптокошелька.",
                tech: ["Next.js", "TypeScript", "PostgreSQL"],
                color: "bg-gradient-to-br from-cyan-600 to-cyan-700",,
              },
              {
                title: "Telegram WebApp для школьных буфетов",
                description: "Telegram WebApp для заказа и доставки еды из школьных буфетов.",
                tech: ["React", "Telegram WebApp", "Aiogram"],
                color: "bg-gradient-to-br from-amber-600 to-amber-700",
              },
            ].map((project, index) => (
              <Card key={index} className={`${project.color} border-0 text-white h-full flex flex-col print:bg-gray-200 print:text-black`}>
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="text-xl print:text-black">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="mb-4 text-slate-100 flex-grow print:text-gray-800">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-white/20 text-white text-xs print:bg-gray-300 print:text-black">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills & Achievements Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center print:text-black">
            <Award className="w-8 h-8 mr-3 text-purple-400" />
            Навыки и достижения
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-slate-800 border-slate-700 print:bg-gray-100 print:border-gray-300">
              <CardHeader>
                <CardTitle className="text-white print:text-black">Технические навыки</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { skill: "Frontend разработка", level: 75 },
                    { skill: "Backend разработка", level: 90 },
                    { skill: "Robotics", level: 75 },
                    { skill: "UI/UX дизайн", level: 50 },
                    { skill: "Алгоритмическое программирование", level: 65 },
                    { skill: "Педагогика, наставничество", level: 85 },
                  ].map((item) => (
                    <div key={item.skill}>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-300 print:text-gray-700">{item.skill}</span>
                        <span className="text-slate-400 print:text-gray-600">{item.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 print:bg-gray-300">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 print:bg-gray-100 print:border-gray-300">
              <CardHeader>
                <CardTitle className="text-white print:text-black">Достижения</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-amber-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white print:text-black">Призер нескольких международных соревнований по робототехнике</h4>
                      <p className="text-slate-400 text-sm print:text-gray-600">X Минский Турнир Робототехники, 2023; Международный Фестиваль Робототехники "Робофинист", 2024</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white print:text-black">Капитан сборной Республики Татарстан по робототехнике</h4>
                      <p className="text-slate-400 text-sm print:text-gray-600">2022-2023, 2023-2024</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white print:text-black">Кандидат в мастера спорта по спортивному программированию</h4>
                      <p className="text-slate-400 text-sm print:text-gray-600">2024</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-emerald-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white print:text-black">Сертификат судьи III категории по спортивному программированию</h4>
                      <p className="text-slate-400 text-sm print:text-gray-600">Министерство спорта Республики Татарстан, 2025</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Competitions & Hackathons Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center print:text-black">
            <Trophy className="w-8 h-8 mr-3 text-amber-400" />
            Олимпиады и хакатоны
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                event: "Первенство России по программированию",
                place: "1 место",
                description: "Решение кейса в области оптимизации процессов школьных буфетов",
                color: "bg-gradient-to-br from-yellow-500 to-yellow-600",
              },
              {
                event: "Международный Фестиваль Робототехники \"Робофинист\"",
                place: "2 место",
                description: "Спортивная робототехника",
                color: "bg-gradient-to-br from-orange-500 to-orange-600",
              },
              {
                event: "X Минский Турнир Робототехники",
                place: "2 место",
                description: "Спортивная робототехника",
                color: "bg-gradient-to-br from-red-500 to-red-600",
              },
              {
                event: "Чемпионат Республики Татарстан по спортивному программированию",
                place: "2 место",
                description: "Региональный отбор по программированию",
                color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
              },
              {
                event: "Международная олимпиада InnopolisOpen по робототехнике",
                place: "2 место",
                description: "Спортивная робототехника",
                color: "bg-gradient-to-br from-blue-500 to-blue-600",
              },
              {
                event: "Russian Robotics Olympiad",
                place: "Топ 20",
                description: "Спортивная робототехника",
                color: "bg-gradient-to-br from-purple-500 to-purple-600",
              },
            ].map((competition, index) => (
              <Card key={index} className={`${competition.color} border-0 text-white h-full flex flex-col print:bg-gray-200 print:text-black`}>
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="text-lg print:text-black">{competition.event}</CardTitle>
                  <CardDescription className="text-slate-100 font-semibold print:text-gray-800">{competition.place}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-100 print:text-gray-800">{competition.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <Card className="bg-slate-800 border-slate-700 print:bg-gray-100 print:border-gray-300">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-white mb-4 print:text-black">Готов к новым вызовам!</h3>
              <p className="text-slate-300 mb-6 print:text-gray-700">Ищу интересные проекты и возможности для профессионального роста</p>
              <ContactButtons />
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
