import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
} from "lucide-react";

// JSON data for features
export const features = [
  {
    icon: <User className="h-6 w-6 text-emerald-400" />,
    title: "Create Your Profile",
    description:
      "Sign up and complete your profile to get personalized healthcare recommendations and services.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-emerald-400" />,
    title: "Book Appointments",
    description:
      "Browse doctor profiles, check availability, and book appointments that fit your schedule.",
  },
  {
    icon: <Video className="h-6 w-6 text-emerald-400" />,
    title: "Video Consultation",
    description:
      "Connect with doctors through secure, high-quality video consultations from the comfort of your home.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-emerald-400" />,
    title: "Consultation Credits",
    description:
      "Purchase credit packages that fit your healthcare needs with our simple subscription model.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
    title: "Verified Doctors",
    description:
      "All healthcare providers are carefully vetted and verified to ensure quality care.",
  },
  {
    icon: <FileText className="h-6 w-6 text-emerald-400" />,
    title: "Medical Documentation",
    description:
      "Access and manage your appointment history, doctor's notes, and medical recommendations.",
  },
];

// JSON data for testimonials
export const testimonials = [
  {
    initials: "KN",
    name: "Kishore Nath C S.",
    role: "Patient",
    rating: 5,
    quote:
      "CareConnect made it so easy to find and book a specialist near me. I got an appointment with a dermatologist within minutes — no long waits or calls",
  },
  {
    initials: "DR",
    name: "Dr. Yuvan R.",
    role: "Cardiologist",
    rating: 4,
    quote:
      "An excellent platform for both doctors and patients. Appointment tracking and medical history access make consultations smoother.",
  },
  {
    initials: "SA",
    name: "Sarath A.",
    role: "Patient",
    rating: 3,
    quote:
      "Consulting with a psychiatrist online through this platform was very convenient. The doctor was professional, and I felt comfortable sharing my concerns.",
  },
  {
    initials: "DR",
    name: "Dr. Harshini S.",
    role: "Psychiatrist",
    rating: 4,
    quote:
      "The credit system is so convenient. I purchased a package for my family, and we've been able to consult with specialists whenever needed.",
  },
  {
    initials: "NS",
    name: "Dr. Nitish S.",
    role: "Neurologist",
    rating: 4,
    quote:
      "This platform has truly simplified patient interaction. It’s a great bridge between doctors and patients, ensuring timely care for neurological cases.",
  },
  {
    initials: "DR",
    name: "Dr. Naveen P.",
    role: "Dermatologist",
    rating: 3,
    quote:
      "CareConnect has helped me reach more patients who need skin consultations, even from remote areas. The interface is clean, easy to use, and makes sharing treatment plans seamless.",
  }
  
];

// JSON data for credit system benefits
export const creditBenefits = [
  "Each consultation requires <strong class='text-[#1560bd]'>2 credits</strong> regardless of duration",
  "Credits <strong class='text-[#1560bd]'>never expire</strong> - use them whenever you need",
  "Monthly subscriptions give you <strong class='text-[#1560bd]'>fresh credits every month</strong>",
  "Cancel or change your subscription <strong class='text-[#1560bd]'>anytime</strong> without penalties",
];
