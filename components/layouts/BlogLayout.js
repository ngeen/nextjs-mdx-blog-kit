import React from "react";

export default ({ children }) => (
    <div className="blog-layout content">
        {children}
        <style jsx>{`
            margin: auto;
        `}</style>
    </div>
);
