import {
    LuUserRound, LuMessageCircleHeart, LuSprayCan, LuUtensils, LuPill,
    LuBrain, LuMoon, LuSun, LuCar, LuHeartHandshake, LuActivity,LuCircleCheck
} from "react-icons/lu";
import { motion } from "framer-motion";

import personalCareImage from "/src/assets/servicesimages/personaCare.jpg"
import companioCare from "/src/assets/servicesimages/companionCare.jpg"
import Homemaking from "/src/assets/servicesimages/Homemaking.jpg"
import MealPreparation from "/src/assets/servicesimages/MealPreparation.jpg"
import MedicationReminders from "/src/assets/servicesimages/MedicationReminders.jpg"

import LiveInCare from "/src/assets/servicesimages/Live-InCare.jpg"
import HourCare  from "/src/assets/servicesimages/24-HourCare.jpg"
import TransportationErrands  from "/src/assets/servicesimages/TransportationErrands.jpg"
import RespiteCare  from "/src/assets/servicesimages/RespiteCare.jpg"
import HospitalRecovery   from "/src/assets/servicesimages/Post-HospitalRecovery.jpg"
import DementiaCare   from "/src/assets/servicesimages/DementiaCare.jpg"
import { FontLoader } from "../../../../ui/fonts";


const ServiceDetailSection = ({
    tag,
    title,
    description,
    includes,
    icon: Icon,
    image,
    reverse = false,
    bg = "white"
}) => (
    <section className={`py-10 ${bg === "ivory" ? "bg-ivory" : "bg-white"}`}>
        <FontLoader />
        <div className="max-w-325 mx-auto">
            <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 items-center`}>

                {/* icon panel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-2/5 flex justify-center"
                >
                    <div className="w-full max-w-md rounded-sm overflow-hidden">

                        {image ? (
                            <div className="w-full lg:w-[480px] h-[500px] rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ) : (
                            Icon && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <Icon size={64} className="text-magenta" strokeWidth={1.25} />
                                </div>
                            )
                        )}
                    </div>
                </motion.div>

                {/* content */}
                <motion.div
                    initial={{ opacity: 0, x: reverse ? -24 : 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-3/5"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-magenta/8 text-magenta border border-magenta/15 mb-4">
                        {tag}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight mb-4">
                        {title}
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-lg">
                        {description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-2.5">
                        {includes.map((item) => (
                            <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                                <LuCircleCheck size={16} className="text-navy shrink-0 mt-0.5" />
                                {item}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);



export const PersonalCareSection = () => (
    <ServiceDetailSection
        // icon={LuUserRound}
        image={personalCareImage}

        tag="Daily Living"
        title="Personal Care Assistance"
        description="Helping clients safely manage daily personal care while maintaining dignity and independence."
        includes={[
            "Bathing & personal hygiene",
            "Dressing & grooming",
            "Mobility & transfer assistance",
            "Toileting & incontinence care",
            "Safety supervision",
        ]}
        bg="white"
    />
);

export const CompanionCareSection = () => (
    <ServiceDetailSection
        image={companioCare}
        tag="Emotional Wellbeing"
        title="Companion Care"
        description="Providing meaningful companionship, conversation, and emotional support to reduce loneliness."
        includes={[
            "Friendly conversation & company",
            "Accompaniment to appointments",
            "Engaging in favorite hobbies",
            "Emotional support & reassurance",
        ]}
        reverse
        bg="ivory"
    />
);

export const HomemakingSection = () => (
    <ServiceDetailSection
        image={Homemaking}
        tag="Household Support"
        title="Homemaking"
        description="Light housekeeping, laundry, organizing, grocery shopping, and maintaining a safe living environment."
        includes={[
            "Light housekeeping & tidying",
            "Laundry & linens",
            "Organizing living spaces",
            "Grocery shopping",
        ]}
        bg="white"
    />
);

export const MealPreparationSection = () => (
    <ServiceDetailSection
        image={MealPreparation}
        tag="Nutrition"
        title="Meal Preparation"
        description="Nutritious meal planning and preparation tailored to dietary needs and personal preferences."
        includes={[
            "Personalized meal planning",
            "Grocery list & shopping support",
            "Cooking & meal prep",
            "Special dietary accommodations",
        ]}
        reverse
        bg="ivory"
    />
);

export const MedicationRemindersSection = () => (
    <ServiceDetailSection
        image={MedicationReminders}
        tag="Health Support"
        title="Medication Reminders"
        description="Helping clients stay on schedule with prescribed medications — non-medical reminder support only."
        includes={[
            "Scheduled medication reminders",
            "Tracking daily adherence",
            "Coordinating refill reminders",
            "Alerting family of any concerns",
        ]}
        bg="white"
    />
);

export const DementiaCareSection = () => (
    <ServiceDetailSection
        image={DementiaCare}
        tag="Specialized Care"
        title="Alzheimer's & Dementia Care"
        description="Specialized compassionate support designed to improve safety, comfort, and quality of life."
        includes={[
            "Dementia-trained caregivers",
            "Structured, calming routines",
            "Home safety monitoring",
            "Patient, reassuring communication",
        ]}
        reverse
        bg="ivory"
    />
);


export const LiveInCareSection = () => (
    <ServiceDetailSection
        image={LiveInCare}
        tag="Round-the-Clock"
        title="Live-In Care"
        description="Continuous one-on-one support for individuals requiring around-the-clock assistance, delivered by a caregiver residing in the home."
        includes={[
            "Overnight presence & support",
            "All daily living assistance",
            "Ongoing companionship",
            "Peace of mind for families",
        ]}
        bg="white"
    />
);

export const TwentyFourHourCareSection = () => (
    <ServiceDetailSection
        image={HourCare}
        tag="Round-the-Clock"
        title="24-Hour Care"
        description="Care available day and night through rotating caregiver shifts, providing peace of mind for clients and families."
        includes={[
            "Rotating caregiver shifts",
            "Continuous supervision",
            "Immediate assistance, any hour",
            "Consistent care team",
        ]}
        reverse
        bg="ivory"
    />
);

export const TransportationSection = () => (
    <ServiceDetailSection
        image={TransportationErrands}
        tag="Getting Around"
        title="Transportation & Errands"
        description="Safe transportation to appointments, shopping, and community activities."
        includes={[
            "Doctor & medical appointments",
            "Grocery & pharmacy runs",
            "Errands & personal business",
            "Social outings & activities",
        ]}
        bg="white"
    />
);


export const RespiteCareSection = () => (
    <ServiceDetailSection
        image={RespiteCare}
        tag="Family Relief"
        title="Respite Care"
        description="Temporary relief that allows family caregivers time to rest while ensuring loved ones continue receiving quality care."
        includes={[
            "Short-term or occasional coverage",
            "Flexible scheduling",
            "Seamless continuity of care",
            "Full care plan handoff notes",
        ]}
        reverse
        bg="ivory"
    />
);

export const PostHospitalRecoverySection = () => (
    <ServiceDetailSection
        image={HospitalRecovery}
        tag="Transition Support"
        title="Post-Hospital Recovery"
        description="Compassionate support during the critical transition from hospital to home, helping reduce readmission risk and support a smooth recovery."
        includes={[
            "Discharge instruction support",
            "Mobility & activity assistance",
            "Medication reminders",
            "Follow-up appointment coordination",
        ]}
        bg="white"
    />
);