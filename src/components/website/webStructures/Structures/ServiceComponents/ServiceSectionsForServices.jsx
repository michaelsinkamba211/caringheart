
import Homemaking from "/src/assets/servicesimages/Homemaking.jpg";
import MedicationReminders from "/src/assets/servicesimages/MedicationReminders.jpg";
import HourCare from "/src/assets/servicesimages/24-HourCare.jpg";


import ServiceDetailSection from "./ServiceDetailSection";

// images changed


// personal care
import personalCareImg from "/src/assets/serviceImages/personalCareImg.jpg"
import personalCareImg2 from "/src/assets/serviceImages/personalCareImag2.jpg"
import personalCareVid from "/src/assets/serviceImages/personalCareVideos.mp4"

// companion care 
import companionCareImg from "/src/assets/serviceImages/companionCareImg.jpg"
import companionCareImg2 from "/src/assets/serviceImages/companionCareImg2.jpg"


// home making


// meal preparation
import MealPreparationImg from "/src/assets/serviceImages/mealPreparationImg.jpg"
import MealPreparationImg2 from "/src/assets/serviceImages/mealPreparationImg2.jpg"
import mealpPreparationVid from "/src/assets/serviceImages/mealPreparationVid.mp4"

// mediacal reminders


// alzheimer dementia
import alzheimerImg from "/src/assets/serviceImages/azhemiaImg.jpg"
import alzheimerImg2 from "/src/assets/serviceImages/azhemiaImg2.jpg"
import alzheimerVide from "/src/assets/serviceImages/azhemiasVid.mp4"

// live in care
import liveInCareImg from "/src/assets/serviceImages/liveInCare.jpg"
import liveInCareImg2 from "/src/assets/serviceImages/liveinCareImg2.jpg"



// 24 hour care



// transportation
import TransportationImg from "/src/assets/serviceImages/transportationImg.jpg"
import TransportationImg2 from "/src/assets/serviceImages/TransportationImg2.jpg"


// respite care
import respiteCareImg from "/src/assets/serviceImages/respiteCareImg.jpg"
import respiteCareImg2 from "/src/assets/serviceImages/respiteCareimg2.jpg"


// post hospital
import postHospitalImg from "/src/assets/serviceImages/postHospitalImg.jpg"
import postHospitalImg2 from "/src/assets/serviceImages/postHopitalImg2.jpg"
import postHospitalImg3 from "/src/assets/serviceImages/posotHopitalImg3.jpg"


// laundry

import LaundryImg from "/src/assets/serviceImages/laundryImg.jpg"
/**
 * Each service's `media` is an array — mix images and videos freely, in any
 * order, any count. Item shape:
 *   { type: "image", src, alt? }
 *   { type: "video", src, poster?, alt? }
 * The slider handles 1 item (no arrows/dots shown) all the way up to
 * however many you add.
 */

export const PersonalCareSection = () => (
    <ServiceDetailSection
        media={[

            { type: "video", src: personalCareVid, alt: "Caregiver assisting with personal care" },
            { type: "image", src: personalCareImg, alt: "Caregiver assisting with personal care" },
            { type: "image", src: personalCareImg2, alt: "Caregiver assisting with personal care" },
        ]}
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
        media={[
            { type: "image", src: companionCareImg, alt: "Caregiver and client sharing a conversation" },
            { type: "image", src: companionCareImg2, alt: "Caregiver and client sharing a conversation" },
        ]}
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



export const LaundrySection = () => (
    <ServiceDetailSection
        media={[
            { type: "image", src: LaundryImg, alt: "Caregiver helping with laundry and linens" },
        ]}
        tag="Household Support"
        title="Laundry"
        description="Keeping clothes and linens clean, fresh, and organized — one less task for clients and families to worry about."
        includes={[
            "Washing, drying & folding",
            "Bed linens & towels",
            "Ironing (where needed)",
            "Putting laundry away",
        ]}
        reverse
        bg="ivory"
    />
);


export const HomemakingSection = () => (
    <ServiceDetailSection
        media={[
            { type: "image", src: Homemaking, alt: "Caregiver helping with light housekeeping" },
        ]}
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
        media={[
            { type: "video", src: mealpPreparationVid, alt: "Caregiver preparing a nutritious meal" },
            { type: "image", src: MealPreparationImg, alt: "Caregiver preparing a nutritious meal" },
            { type: "image", src: MealPreparationImg2, alt: "Caregiver preparing a nutritious meal" },
        ]}
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
        media={[
            { type: "image", src: MedicationReminders, alt: "Caregiver helping with a medication reminder" },
        ]}
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
        media={[
            { type: "video", src: alzheimerVide, alt: "Caregiver providing calm, patient dementia support" },
            { type: "image", src: alzheimerImg, alt: "Caregiver providing calm, patient dementia support" },
            { type: "image", src: alzheimerImg2, alt: "Caregiver providing calm, patient dementia support" },
        ]}
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
        media={[
            { type: "image", src: liveInCareImg, alt: "Live-in caregiver supporting a client at home" },
            { type: "image", src: liveInCareImg2, alt: "Live-in caregiver supporting a client at home" },
        ]}
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
        media={[
            { type: "image", src: HourCare, alt: "24-hour caregiver support" },
        ]}
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
        media={[
            { type: "image", src: TransportationImg, alt: "Caregiver providing transportation support" },
            { type: "image", src: TransportationImg2, alt: "Caregiver providing transportation support" },
        ]}
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
        media={[
            { type: "image", src: respiteCareImg, alt: "Caregiver providing respite support" },
            { type: "image", src: respiteCareImg2, alt: "Caregiver providing respite support" },
        ]}
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
        media={[
            { type: "image", src: postHospitalImg, alt: "Caregiver supporting post-hospital recovery" },
            { type: "image", src: postHospitalImg3, alt: "Caregiver supporting post-hospital recovery" },
            { type: "image", src: postHospitalImg2, alt: "Caregiver supporting post-hospital recovery" },
        ]}
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
