import React from 'react';
import Image from 'next/image';

// Component for mission, vision, values cards
const ValueCard = ({ 
  title, 
  description 
}: { 
  title: string; 
  description: string;
}) => (
  <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center max-w-full xl:overflow-x-scroll">
    <div className="w-10 h-10 bg-amber-100 rounded-full mb-3 flex items-center justify-center">
      {title === "Mission" && (
        <svg className="w-5 h-5 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg>
      )}
      {title === "Vision" && (
        <svg className="w-5 h-5 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
        </svg>
      )}
      {title === "Value" && (
        <svg className="w-5 h-5 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
        </svg>
      )}
    </div>
    <h3 className="text-gray-800 font-semibold mb-1">OUR {title.toUpperCase()}</h3>
    <p className="text-sm text-gray-600 text-center">{description}</p>
  </div>
);

// Component for statistics
const StatCard = ({ 
  number, 
  label 
}: { 
  number: string; 
  label: string;
}) => (
  <div className="flex flex-col items-center">
    <div className="flex items-center gap-2">
      <span className="text-xl font-bold text-amber-50">{number}</span>
      <svg className="w-5 h-5 text-amber-50" fill="currentColor" viewBox="0 0 20 20">
        {label.includes("libraries") && (
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
        )}
        {label.includes("years") && (
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
        )}
        {label.includes("students") && (
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        )}
        {label.includes("courses") && (
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
        )}
      </svg>
    </div>
    <p className="text-xs text-amber-50">{label}</p>
  </div>
);

// Component for team member profile
const TeamMember = ({ 
  name, 
  role, 
  imageUrl 
}: { 
  name: string; 
  role: string; 
  imageUrl: string;
}) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
    <div className="w-full h-40 relative">
      <Image 
        src={imageUrl} 
        alt={name} 
        fill 
        style={{ objectFit: 'cover' }} 
      />
    </div>
    <div className="p-4">
      <h3 className="font-medium text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  </div>
);

// About Us main component
const AboutUs: React.FC = () => {
  return (
    <div className="bg-amber-50">
      {/* Hero Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-1 text-center">About us.</h2>
        <div className="w-12 h-1 bg-amber-700 mx-auto mb-10"></div>
        
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h3 className="text-xl font-semibold text-amber-800 mb-2">
              We are the best library you can get into — <span className="text-gray-700">a space where knowledge meets inspiration, and curiosity turns into discovery.</span>
            </h3>
          </div>
          
          <div className="md:col-span-8">
            <p className="text-gray-700 mb-6">
              Our mission goes beyond simply storing books; we are a dynamic space where ideas are born, 
              connections are formed, and inspiration flourishes. Whether you're a student, researcher, and
              scholar, or simply someone curious about the world, our library is built to empower you with the
              tools, resources, and environment you need to thrive.
            </p>
            <p className="text-gray-700 mb-6">
              Our collection spans across genres, disciplines, and formats — from classic literature to cutting-edge research, from printed volumes
              to digital archives, and from timeless philosophy to trending technologies. We believe that access
              to knowledge should be a right, not a luxury itself. That's why we constantly update and expand
              our resources, ensuring that our community always has access to the most relevant, diverse, and
              high-quality content available.
            </p>
            <p className="text-gray-700">
              But we are more than our books. We are a space designed to nurture every kind of learner and
              thinker. Our library features modern, thoughtfully planned zones — quiet study areas for deep
              focus, collaborative spaces for group work, digital labs for creativity, and inviting nooks with
              reading rooms that invite reflection and imagination. With free Wi-Fi, multimedia systems, and
              access to online journals and databases, we blend the charm of a traditional library with the
              power of modern technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <h2 className="text-center text-gray-900 text-2xl font-bold mb-2">Driven by purpose.</h2>
        <h3 className="text-center text-gray-900 text-xl font-bold mb-8">Powered by passion.</h3>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <ValueCard 
            title="Mission" 
            description="Empowering students with easy, comfortable library access, and a supportive community."
          />
          <ValueCard 
            title="Vision" 
            description="To redefine education by fueling minds to reach their full academic potential."
          />
          <ValueCard 
            title="Value" 
            description="Innovation, Accessibility, Collaboration, Respect for diverse perspectives, and growing together as student-first platform."
          />
        </div>

        {/* Statistics */}
        <div className="bg-amber-700 rounded-lg p-6 mb-12">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-amber-50 font-medium">Experiencing Traditions and Customs</h3>
            <div className="bg-amber-800 rounded-full p-2">
              <svg className="w-5 h-5 text-amber-50" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard number="200+" label="libraries served" />
            <StatCard number="20+" label="years experience" />
            <StatCard number="10k+" label="students helped" />
            <StatCard number="900+" label="courses covered" />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-1">Our Story</h2>
        <div className="w-12 h-1 bg-amber-700 mb-8"></div>
        
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-6 relative">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="relative h-64 mb-4">
                <Image 
                  src="/images/students-working.jpg" 
                  alt="Students working together" 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              <div className="absolute top-4 right-4">
                <div className="bg-gray-100 rounded-full p-2">
                  <svg className="w-5 h-5 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-6">
            <div className="mb-4 text-right">
              <span className="text-sm text-gray-500">How Student Adda was<br />born out of a real need:</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 flex justify-end">
                <svg className="w-8 h-8 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="text-gray-700 mb-4">
                Student Adda began with a simple idea — to make studying smarter, easier, and more connected. As students, we often struggled to find usable spaces to study, reliable tools to stay productive, and a supportive community that understood our unique challenges.
              </p>
              <p className="text-gray-700">
                That's when a group of students collaborating from our university came up with the concept of a study system for students, by students — a place where students could not only find library seats but also access digital resources, join study groups, and form building blocks of a modern learner network — all from one platform!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-xs uppercase text-amber-700 font-semibold">Passionate minds building smarter learning experiences</span>
            <h2 className="text-2xl font-bold mt-1">Meet the <span className="text-amber-700">Team Behind</span> Student Adda</h2>
          </div>
          <div className="flex gap-2">
            <button className="bg-white rounded-full p-2 shadow-sm">
              <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="bg-amber-700 rounded-full p-2 shadow-sm">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <TeamMember 
            name="Aniket Jatav" 
            role="Full Stack Developer" 
            imageUrl="/images/team-member-1.jpg" 
          />
          <TeamMember 
            name="Aniket Jatav" 
            role="Full Stack Developer" 
            imageUrl="/images/team-member-2.jpg" 
          />
          <TeamMember 
            name="Aniket Jatav" 
            role="Full Stack Developer" 
            imageUrl="/images/team-member-3.jpg" 
          />
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-10 px-6 max-w-6xl mx-auto mb-12">
        <div className="grid md:grid-cols-12 gap-4">
          <div className="md:col-span-6 relative rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-full min-h-[400px]">
              <Image 
                src="/images/students-meeting.jpg" 
                alt="Students meeting" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
          </div>
          
          <div className="md:col-span-6 bg-amber-700 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Join us today 👋</h2>
            <p className="mb-6">
              Clarity gives you the blocks and components you need to create a truly professional website.
            </p>
            
            <button className="w-full bg-white text-gray-800 py-3 px-4 rounded flex items-center justify-center gap-2 mb-6">
              <svg className="w-5 h-5" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <span>Sign up with Google</span>
            </button>
            
            <form>
              <div className="mb-4">
                <label className="block text-sm mb-1">First & Last Name</label>
                <input 
                  type="text" 
                  placeholder="Dr. Rowan Leon" 
                  className="w-full py-2 px-3 rounded text-gray-800" 
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm mb-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="dr.rowan@email.com" 
                  className="w-full py-2 px-3 rounded text-gray-800" 
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm mb-1">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••••" 
                  className="w-full py-2 px-3 rounded text-gray-800" 
                />
              </div>
              
              <div className="flex items-center mb-6">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm">Remember me</label>
              </div>
              
              <button className="w-full bg-gray-900 text-white py-2 px-4 rounded mb-4">
                Create Account
              </button>
              
              <p className="text-sm text-center">
                Don't have an account? <a href="#" className="underline">Create free account</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Ad Spaces */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white p-6 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">Ads</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;