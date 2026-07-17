import React, { useState, useEffect } from "react";

import { message } from "antd";

import { LuMail,LuCircleCheck,LuTimer,LuHouse } from "react-icons/lu";

import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";

const UnsubscribeForm = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [unsubscribed, setUnsubscribed] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    // Check for email in URL parameters on component mount
    useEffect(() => {
        const urlEmail = searchParams.get('email');
        if (urlEmail) {
            try {
                const decodedEmail = decodeURIComponent(urlEmail);
                setEmail(decodedEmail);
                // Auto-unsubscribe if email is provided in URL
                handleAutoUnsubscribe(decodedEmail);
            } catch (error) {
                console.error("Error decoding email from URL:", error);
                messageApi.error("Invalid unsubscribe link");
            }
        } else {
            messageApi.error("No email address found in unsubscribe link");
        }
    }, [searchParams, messageApi]);

    const handleAutoUnsubscribe = async (userEmail) => {
        if (!userEmail) return;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userEmail)) {
            messageApi.error("Invalid email address in unsubscribe link");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.delete(
                `/api/subscriptions/unsubscribe?email=${encodeURIComponent(userEmail)}`,
                { withCredentials: true }
            );

            messageApi.success(response.data.message || "Successfully unsubscribed");
            setUnsubscribed(true);

        } catch (error) {
            console.error("Unsubscribe error:", error);
            if (error.response?.status === 404) {
                messageApi.error("This email address is not subscribed to our newsletter");
            } else if (error.response?.status === 400) {
                messageApi.error("Invalid email address format");
            } else {
                messageApi.error(
                    error.response?.data?.message ||
                    "Unsubscribe failed. Please try again later."
                );
            }
        } finally {
            setLoading(false);
        }
    };

    const handleGoHome = () => {
        navigate('/');
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center 
            ">

                <div className="max-w-md mx-auto bg-white rounded-sm  p-2 text-center ">
                    {contextHolder}
                    <div className="mb-6">
                        <div className="w-20 h-20 bg-royalblue/50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <LuMail className="w-8 h-8 text-royalpurple" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Processing Unsubscribe</h3>
                        <p className="text-gray-600 mb-4">
                            Unsubscribing <strong className="text-royalpurple">{email}</strong> from our newsletter...
                        </p>
                        <div className="w-12 h-12 border-4 border-royalpurple border-t-transparent rounded-full animate-spin mx-auto"></div>
                    </div>
                </div>

            </div>
        );
    }
    if (unsubscribed) {
        return (

            <div className="min-h-screen flex items-center justify-center">


                <div className="max-w-md mx-auto bg-white rounded-sm  p-2 text-center ">
                    {contextHolder}
                    <div className="mb-6">
                        <LuCircleCheck className="w-10 h-10 text-green-500 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Successfully Unsubscribed</h3>
                        <p className="text-gray-600 mb-4">
                            <strong className="text-green-600 text-sm">{email}</strong> <br />
                        </p>
                        <p className="text-gray-500 text-sm mb-6">
                            You will no longer receive newsletter updates from Goreka Financial Services Limited.
                        </p>
                    </div>
                    <button
                        onClick={handleGoHome}
                        className="inline-flex items-center justify-center bg-vividgreen text-white font-semibold px-8 py-4 rounded-sm hover:bg-vividgreen/90 transition-all duration-300 w-full text-sm"
                    >
                        <LuHouse className="w-5 h-5 mr-2" />
                        Return to Homepage
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center ">


            <div className="max-w-md mx-auto bg-white rounded-sm  p-8 text-center">
                {contextHolder}
                <div className="mb-6">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <LuTimer className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-md font-bold text-gray-900 mb-2">Unsubscribe Failed</h3>
                    <p className="text-gray-600 mb-4">
                        We couldn't process your unsubscribe request.
                    </p>
                    <p className="text-gray-500 text-sm">
                        Please use the unsubscribe link from your email or contact our support team.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default UnsubscribeForm;