import profileAvatar from "@/assets/profile-avatar.jpg"

export function ProfileSection() {
  return (
    <div className="text-center mb-12 animate-scale-in">
      {/* Profile Image with Floating Animation */}
      <div className="relative inline-block mb-6">
        <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-20 animate-glow" />
        <img
          src={profileAvatar}
          alt="Profile Avatar"
          className="relative w-32 h-32 rounded-full border-4 border-glass shadow-glow animate-float mx-auto object-cover"
        />
      </div>
      
      {/* Name and Title */}
      <h1 className="text-4xl font-grotesk font-bold bg-gradient-primary bg-clip-text text-white text-shimmer mb-3">
        Gozie Ihejirika
      </h1>
      <p className="text-xl text-muted-foreground mb-4">
        Mobile Developer & Instructor
      </p>
      
      {/* Bio */}
      <p className="text-muted-foreground max-w-l mx-auto leading-relaxed">
        Mobile developer (and web enthusiast) who enjoys building software that puts users first. From concept to launch, I help clients craft winning products by blending performance, design, and usability into experiences people actually enjoy.

      </p>
    </div>
  )
}