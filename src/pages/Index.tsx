import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const courses = [
    {
      id: 1,
      title: 'Основы Python',
      category: 'Программирование',
      level: 'Начальный',
      progress: 65,
      students: 12453,
      rating: 4.8,
      duration: '8 недель',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'UI/UX Design Pro',
      category: 'Дизайн',
      level: 'Продвинутый',
      progress: 0,
      students: 8921,
      rating: 4.9,
      duration: '12 недель',
      color: 'from-pink-500 to-orange-500'
    },
    {
      id: 3,
      title: 'Data Science Basics',
      category: 'Анализ данных',
      level: 'Средний',
      progress: 0,
      students: 15632,
      rating: 4.7,
      duration: '10 недель',
      color: 'from-orange-500 to-purple-500'
    },
    {
      id: 4,
      title: 'React & TypeScript',
      category: 'Веб-разработка',
      level: 'Средний',
      progress: 30,
      students: 9845,
      rating: 4.9,
      duration: '6 недель',
      color: 'from-blue-500 to-purple-500'
    }
  ];

  const activeCourses = courses.filter(c => c.progress > 0);
  const stats = {
    completed: 12,
    inProgress: 2,
    hoursLearned: 156,
    certificates: 8
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <header className="border-b bg-white/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                EduFlex
              </h1>
            </div>
            
            <nav className="hidden md:flex gap-6">
              <Button 
                variant={activeTab === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('home')}
                className="gap-2"
              >
                <Icon name="Home" size={18} />
                Главная
              </Button>
              <Button 
                variant={activeTab === 'courses' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('courses')}
                className="gap-2"
              >
                <Icon name="BookOpen" size={18} />
                Каталог
              </Button>
              <Button 
                variant={activeTab === 'my-courses' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('my-courses')}
                className="gap-2"
              >
                <Icon name="Laptop" size={18} />
                Мои курсы
              </Button>
              <Button 
                variant={activeTab === 'profile' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('profile')}
                className="gap-2"
              >
                <Icon name="User" size={18} />
                Профиль
              </Button>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                  АС
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-12 text-white animate-gradient bg-[length:200%_200%]">
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-5xl font-bold mb-4">
                  Обучение, которое адаптируется под вас
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  EduFlex использует ИИ для персонализации вашего образовательного пути
                </p>
                <div className="flex gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-white/90"
                    onClick={() => setActiveTab('courses')}
                  >
                    <Icon name="Sparkles" size={20} className="mr-2" />
                    Начать обучение
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10"
                  >
                    <Icon name="Play" size={20} className="mr-2" />
                    Как это работает
                  </Button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-orange-300/20 rounded-full blur-3xl" />
            </section>

            <section>
              <h3 className="text-3xl font-bold mb-6">Продолжить обучение</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {activeCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{course.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-yellow-600">
                          <Icon name="Star" size={16} fill="currentColor" />
                          {course.rating}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Icon name="Clock" size={14} />
                        {course.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">Прогресс</span>
                            <span className="font-semibold">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        <Button className="w-full" variant="default">
                          <Icon name="PlayCircle" size={18} className="mr-2" />
                          Продолжить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold mb-2">Каталог курсов</h2>
              <p className="text-muted-foreground text-lg">Найдите идеальный курс для ваших целей</p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="programming">Код</TabsTrigger>
                <TabsTrigger value="design">Дизайн</TabsTrigger>
                <TabsTrigger value="data">Данные</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className={`h-32 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                        <Icon name="GraduationCap" size={48} className="text-white" />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="secondary">{course.level}</Badge>
                          <div className="flex items-center gap-1 text-sm text-yellow-600">
                            <Icon name="Star" size={16} fill="currentColor" />
                            {course.rating}
                          </div>
                        </div>
                        <CardTitle className="text-xl">{course.title}</CardTitle>
                        <CardDescription>{course.category}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Icon name="Users" size={14} />
                              {course.students.toLocaleString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Clock" size={14} />
                              {course.duration}
                            </span>
                          </div>
                          <Button className="w-full">
                            <Icon name="Sparkles" size={18} className="mr-2" />
                            Начать курс
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeTab === 'my-courses' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold mb-2">Мои активные курсы</h2>
              <p className="text-muted-foreground text-lg">Ваш персональный путь обучения</p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Завершено</CardDescription>
                  <CardTitle className="text-3xl">{stats.completed}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>В процессе</CardDescription>
                  <CardTitle className="text-3xl">{stats.inProgress}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Часов обучения</CardDescription>
                  <CardTitle className="text-3xl">{stats.hoursLearned}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Сертификатов</CardDescription>
                  <CardTitle className="text-3xl">{stats.certificates}</CardTitle>
                </CardHeader>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {activeCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className={`h-3 bg-gradient-to-r ${course.color}`} />
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Badge>{course.category}</Badge>
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {course.duration}
                          </span>
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {course.progress}%
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Progress value={course.progress} className="h-3" />
                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <Icon name="PlayCircle" size={18} className="mr-2" />
                        Продолжить урок
                      </Button>
                      <Button variant="outline">
                        <Icon name="BookMarked" size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="space-y-8 animate-fade-in">
            <Card className="overflow-hidden">
              <div className="h-32 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500" />
              <CardHeader className="relative -mt-16">
                <div className="flex items-end gap-6">
                  <Avatar className="w-32 h-32 border-4 border-white">
                    <AvatarFallback className="bg-gradient-to-br from-purple-600 to-pink-600 text-white text-4xl">
                      АС
                    </AvatarFallback>
                  </Avatar>
                  <div className="mb-4 flex-1">
                    <CardTitle className="text-3xl mb-2">Александр Смирнов</CardTitle>
                    <CardDescription className="text-base">
                      Активный студент с июня 2023
                    </CardDescription>
                  </div>
                  <Button className="mb-4">
                    <Icon name="Settings" size={18} className="mr-2" />
                    Настройки
                  </Button>
                </div>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" className="text-purple-600" />
                    Ваш стиль обучения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Визуальный</span>
                        <span className="text-sm font-semibold">78%</span>
                      </div>
                      <Progress value={78} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Практический</span>
                        <span className="text-sm font-semibold">65%</span>
                      </div>
                      <Progress value={65} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Аудиальный</span>
                        <span className="text-sm font-semibold">42%</span>
                      </div>
                      <Progress value={42} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Target" className="text-pink-600" />
                    Рекомендации ИИ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Icon name="Sparkles" size={18} className="text-purple-600 mt-1" />
                      <span className="text-sm">Добавьте больше практических заданий</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Sparkles" size={18} className="text-purple-600 mt-1" />
                      <span className="text-sm">Оптимальное время обучения: 18:00-21:00</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Sparkles" size={18} className="text-purple-600 mt-1" />
                      <span className="text-sm">Рекомендуем курс по Machine Learning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Award" className="text-orange-600" />
                    Достижения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Icon name="Trophy" className="text-white" size={24} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-16 border-t bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <Icon name="GraduationCap" className="text-white" size={16} />
                </div>
                EduFlex
              </h3>
              <p className="text-sm text-muted-foreground">
                Персонализированное обучение нового поколения
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Платформа</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Каталог курсов</li>
                <li>Преподаватели</li>
                <li>Корпоративным клиентам</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Справка</li>
                <li>FAQ</li>
                <li>Сообщество</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Соцсети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline">
                  <Icon name="MessageCircle" size={18} />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Send" size={18} />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Mail" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2023 EduFlex. Команда Innovators
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
