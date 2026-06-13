"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmallSizeMediumTitles"
        background="none"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Content",
          id: "#content",
        },
        {
          name: "Community",
          id: "#community",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Connect",
          id: "#connect",
        },
      ]}
      brandName="Creator Hub"
    />
  </div>

  <div id="home" data-section="home">
      <HeroCarouselLogo
      logoText="Creator's Vision"
      description="Your daily dose of inspiration and entertainment. Explore engaging videos, tutorials, and unique stories from our vibrant community."
      buttons={[
        {
          text: "Watch Latest Video",
          href: "https://www.youtube.com/@YourChannelHere",
        },
        {
          text: "Subscribe Now",
          href: "https://www.youtube.com/@YourChannelHere",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/empty-gaming-studio-with-rgb-led-lights-powerful-personal-computer-streaming-online-competition-display-with-stream-chat-prepared-virtual-tournament-living-room-with-nobody_482257-12597.jpg",
          imageAlt: "Dynamic video editing interface",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/adult-male-doing-exercises-personal-blog_23-2148581784.jpg",
          imageAlt: "Creator recording a video in a studio",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/multiethnic-team-employees-meeting-break-have-fun-discussing-about-business-collaboration-happy-people-laughing-planning-marketing-project-office-handheld-shot_482257-43330.jpg",
          imageAlt: "A group of content creators collaborating",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/people-using-digital-devices-smart-technology-double-color-exposure-effect_53876-104899.jpg",
          imageAlt: "Audience watching a captivating video",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/happy-little-girl-influencer-recording-video-chatting-with-fans_482257-76808.jpg",
          imageAlt: "Live streaming setup with chat overlay",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/friends-enjoying-lunch-together_23-2148451675.jpg",
          imageAlt: "Vibrant community celebrating milestones",
        },
      ]}
      autoplayDelay={4000}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Behind the Scenes"
      description="We're dedicated to bringing you high-quality content that educates, entertains, and inspires. Our journey began with a passion for storytelling and a commitment to our audience. Learn more about our mission and the team that makes it all happen."
      tag="Our Story"
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-young-tattooed-person_23-2149563261.jpg"
      imageAlt="Creator working in a well-lit studio"
    />
  </div>

  <div id="content" data-section="content">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          tag: "Tutorials",
          title: "Master New Skills",
          subtitle: "Step-by-step guides",
          description: "Unlock your potential with our comprehensive tutorials covering various topics, designed for all skill levels.",
          imageSrc: "http://img.b2bpic.net/free-photo/student-working-with-computer_1098-360.jpg",
        },
        {
          tag: "Vlogs",
          title: "Daily Adventures",
          subtitle: "Join our journey",
          description: "Experience life through our lenses with engaging vlogs, bringing you along on exciting adventures and behind-the-scenes moments.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-taking-photos-boyfriend-nature-with-smartphone_23-2148693661.jpg",
        },
        {
          tag: "Reviews",
          title: "Honest Opinions",
          subtitle: "In-depth analysis",
          description: "Get unbiased reviews on the latest products, trends, and services, helping you make informed decisions.",
          imageSrc: "http://img.b2bpic.net/free-photo/search-net_1098-13325.jpg",
        },
      ]}
      title="Explore Our Content"
      description="Dive into a diverse range of videos designed to captivate and inform. From in-depth tutorials to exciting vlogs, there's always something new to discover."
    />
  </div>

  <div id="community" data-section="community">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Inspirational Content",
          quote: "This channel consistently delivers engaging and insightful content. It's truly a source of inspiration and learning!",
          name: "Sarah J.",
          role: "Long-time Subscriber",
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-corporate-businesswoman_23-2147702113.jpg",
        },
        {
          id: "2",
          title: "Top-Quality Production",
          quote: "The production quality of these videos is outstanding. Every episode is a treat to watch, and the editing is flawless.",
          name: "Mark T.",
          role: "Video Editor",
          imageSrc: "http://img.b2bpic.net/free-photo/senior-businessman-walking-outside-modern-office-building_1139-1079.jpg",
        },
        {
          id: "3",
          title: "Always Learning Something New",
          quote: "I always learn something new and valuable from this channel. The explanations are clear, and the topics are well-researched.",
          name: "Emily R.",
          role: "Student",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-excited-person-portrait_23-2151186649.jpg",
        },
        {
          id: "4",
          title: "Engaging & Authentic",
          quote: "The creator's authenticity shines through every video. It's refreshing to find a channel that is both entertaining and genuine.",
          name: "David K.",
          role: "Content Enthusiast",
          imageSrc: "http://img.b2bpic.net/free-photo/successful-senior-businessman-standing-window_1262-3120.jpg",
        },
        {
          id: "5",
          title: "Fantastic Community",
          quote: "Beyond the videos, the community around this channel is fantastic. It's a supportive place to share ideas and connect with like-minded people.",
          name: "Jessica P.",
          role: "Community Member",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-woman-beautiful-purple-dress-posing-pink-wall_140725-112669.jpg",
        },
      ]}
      title="What Our Viewers Say"
      description="Our community is at the heart of everything we do. Hear directly from the people who make our channel a success and share their experiences."
    />
  </div>

  <div id="partners" data-section="partners">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "YouTube",
        "Twitch",
        "Patreon",
        "Discord",
        "Google",
        "Adobe",
        "Streamlabs",
      ]}
      title="Trusted by Platforms"
      description="We collaborate with leading platforms and brands to bring you even more value and unique experiences. Our partnerships enhance the quality and reach of our content."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How often do you upload new videos?",
          content: "We strive to upload new videos every Monday and Thursday. Make sure to subscribe and hit the notification bell to stay updated!",
        },
        {
          id: "q2",
          title: "Can I suggest a video topic?",
          content: "Absolutely! We love hearing from our community. Please leave your suggestions in the comments section of our latest video or reach out via our social media channels.",
        },
        {
          id: "q3",
          title: "How can I support the channel?",
          content: "The best way to support us is by watching our videos, liking, sharing, commenting, and subscribing. You can also join our Patreon for exclusive content and perks!",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-drinking-matcha-tea_23-2150163280.jpg"
      imageAlt="Person asking a question and getting an answer"
      mediaAnimation="opacity"
      title="Frequently Asked Questions"
      description="Have questions about our content, collaborations, or anything else? Find quick answers here, or feel free to reach out directly!"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="latest-videos" data-section="latest-videos">
      <BlogCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      title="Latest Videos & Updates"
      description="Stay up-to-date with our freshest content and behind-the-scenes insights. Never miss a moment from your favorite channel."
      blogs={[
        {
          id: "b1",
          category: "Vlog",
          title: "My Day in the Life as a Full-Time Creator",
          excerpt: "Join me for a candid look into what a typical day holds, from brainstorming to editing and everything in between.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-beautiful-woman-lifestyle-blogger-talking-about-makeup-camera-recording-vlog_1258-254218.jpg",
          imageAlt: "Creator's daily life vlog",
          authorName: "Your Name",
          authorAvatar: "http://img.b2bpic.net/free-photo/girl-hinting-making-first-move-cute-sassy-african-american-curlyhaired-woman-yellow-sweater-winking-flirty-smiling-encourage-friend-everything-okay-standing-white-background-positive_176420-50613.jpg",
          date: "July 15, 2024",
        },
        {
          id: "b2",
          category: "Tutorial",
          title: "Advanced Editing Techniques for Beginners",
          excerpt: "Elevate your video editing skills with these pro tips and tricks, perfect for anyone looking to improve their content.",
          imageSrc: "http://img.b2bpic.net/free-photo/video-editor-using-editing-software-green-screen-monitor-upgrade-footage-shot_482257-82205.jpg",
          imageAlt: "Video editing tutorial screenshot",
          authorName: "Your Name",
          authorAvatar: "http://img.b2bpic.net/free-photo/confident-successful-middle-aged-business-leader_1262-4872.jpg",
          date: "July 10, 2024",
        },
        {
          id: "b3",
          category: "Review",
          title: "Is the New Camera Worth It? Full Review!",
          excerpt: "A comprehensive breakdown of the latest camera gear, its features, pros, cons, and whether it's right for your setup.",
          imageSrc: "http://img.b2bpic.net/free-photo/working-led-lightning-system-view-from-back-white-movie-set_1268-15944.jpg",
          imageAlt: "New camera review thumbnail",
          authorName: "Your Name",
          authorAvatar: "http://img.b2bpic.net/free-photo/beautiful-cartoon-woman-portrait_23-2151839669.jpg",
          date: "July 5, 2024",
        },
      ]}
    />
  </div>

  <div id="connect" data-section="connect">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Get in Touch"
      title="Collaborate or Connect"
      description="Whether you have a business inquiry, collaboration proposal, or just want to say hello, we'd love to hear from you. Send us a message!"
      inputPlaceholder="Your Email Address"
      buttonText="Send Message"
      termsText="By sending a message, you agree to our privacy policy and terms of service."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Creator's Vision"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
