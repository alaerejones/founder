import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, Globe, Instagram, Layers, Linkedin, Medal, Star, Trophy, Twitter, Users } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                ECOWAS AMBASSADOR
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Founder. Builder. Entrepreneur & Youth Advocate
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                As CEO of Sinocle Nigeria Limited and ECOWAS Youth Ambassador, I'm transforming Africa through strategic business ventures and youth empowerment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Explore Ventures
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50">
                  Build with Sinocle
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/lovable-uploads/6f2a5535-255f-478e-8d2c-9d5c00cb3143.png"
                  alt="Onyeolu Israel Chima"
                  className="w-80 h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Logos */}
      <section className="py-8 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-600 mb-6">Featured in leading media outlets</p>
          <div className="relative">
            <div className="flex animate-scroll-continuous">
              {[...Array(3)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex items-center justify-around min-w-full">
                  <div className="text-xl font-bold text-gray-400">VANGUARD</div>
                  <div className="text-xl font-bold text-gray-400">THE SUN</div>
                  <div className="text-xl font-bold text-gray-400">THE NATION</div>
                  <div className="text-xl font-bold text-gray-400">DAILY POST</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vision for Leadership & National Development
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/-ehcCk1PP74?autoplay=1&mute=1&controls=1&rel=0"
                title="Vision for Leadership & National Development"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact by Numbers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Impact by Numbers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building lasting change across multiple sectors in Africa through strategic leadership and innovation.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">150+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">4</div>
                <div className="text-sm text-gray-600">Major Sectors</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">10,000+</div>
                <div className="text-sm text-gray-600">Lives Impacted</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-sm text-gray-600">Awards Received</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ventures & Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Ventures & Leadership
                </h2>
                <p className="text-lg text-gray-600">
                  Driving growth across Africa through business excellence.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Sinocle Nigeria Limited
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Leading real estate, infrastructure, and agricultural ventures transforming communities.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Explore My Ventures
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/lovable-uploads/ceb10282-44f5-425d-8863-b8ec2966b09f.png"
                  alt="Sinocle Project"
                  className="w-full max-w-md h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards & Recognitions</h2>
            <p className="text-lg text-gray-600">
              Honored for impactful leadership, humanitarian service, and youth empowerment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Medal className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Humanitarian Award</h3>
                    <p className="text-sm text-gray-600">
                      In recognition of unwavering commitment to humanitarian service and youth empowerment (Lions Club, 2023/2024).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Exemplary Leadership Award</h3>
                    <p className="text-sm text-gray-600">
                      Immense contributions to Nigeria's economic growth and development as CEO of Sinocle Group (SYAN, Feb 2024).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Golden Role Model Award</h3>
                    <p className="text-sm text-gray-600">
                      Bridging social gaps and promoting affordable housing for the underprivileged (NYAGGI, 2023).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">ECOWAS Youth Ambassador Award</h3>
                    <p className="text-sm text-gray-600">
                      Entrepreneurial excellence, leadership, and regional development across West Africa (WAYC, Nov 2023).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Personal Quote */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl font-medium text-white leading-relaxed">
              "Entrepreneurship is not just a career path — it's a responsibility to build solutions for generations."
            </blockquote>
            <cite className="block mt-6 text-lg text-white/80">— Onyeolu Israel Chima</cite>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Voices of Impact</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0">
                <p className="text-gray-600 mb-4 italic">
                  "His vision for youth empowerment and strategic business development has transformed countless lives across Africa."
                </p>
                <div className="text-sm font-medium text-gray-900">— Community Leader</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <p className="text-gray-600 mb-4 italic">
                  "A true advocate for sustainable development and entrepreneurship in West Africa."
                </p>
                <div className="text-sm font-medium text-gray-900">— Business Partner</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Building Africa's Future Through Strategic Leadership
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  As CEO of Sinocle Nigeria Limited and ECOWAS Youth Ambassador, I'm committed to transforming Africa through strategic investments in real estate, agriculture, and youth empowerment initiatives. My journey represents the power of vision, determination, and strategic thinking in creating lasting change.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Learn More About My Journey
                  </Button>
                  <Button variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50">
                    Start a Conversation
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/lovable-uploads/ba70c25b-3758-4ab6-be0a-a068feb953bf.png"
                  alt="Onyeolu Israel Chima"
                  className="w-80 h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Let's Build Africa Together
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Partner with me to drive sustainable ventures and youth empowerment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Partner with Me
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50">
                Explore My Ventures
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50">
                Connect with Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">AMB. ONYEOLU CHIMA</h3>
              <p className="text-white/80">
                Entrepreneur, Youth Advocate, and ECOWAS Ambassador committed to building Africa's future through strategic business ventures and youth empowerment.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="/about" className="hover:text-white/80">About</a>
                <a href="/ventures" className="hover:text-white/80">Ventures</a>
                <a href="/philanthropy" className="hover:text-white/80">Philanthropy</a>
                <a href="/awards" className="hover:text-white/80">Awards</a>
                <a href="/media" className="hover:text-white/80">Media</a>
                <a href="/contact" className="hover:text-white/80">Contact</a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20">
                  <Globe className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
              <div className="text-sm">
                <p className="text-white/80">Contact: contact@onyeoluisraelchima.com</p>
                <p className="text-white/60 mt-2">© 2024 Onyeolu Israel Chima. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
