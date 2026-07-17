import React from "react";
import UnsubscribeForm from "./UnsubscribeForm";

const UnsubscribePage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

                {/* Unsubscribe Form - Auto-processes when email is in URL */}
                <UnsubscribeForm />

        
            </div>
        </div>
    );
};

export default UnsubscribePage;