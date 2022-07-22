// pages/index.js
import { SignedOut, SignedIn, UserProfile, SignOutButton, UserButton, useAuth } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";

const Home = () => {
    function showUserId() {
        fetch("/api/getUserId")
            .then((res) => res.json())
            .then(({ id }) => {
                alert(`User id: ${id}`);
            });
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <main>
                <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h1>Welcome to your new app.</h1>
                    <UserButton />
                </nav>
                <div>
                    <SignedIn>
                        <button onClick={showUserId}>Show user ID</button>
                        <UserProfile />
                        <SignOutButton />
                    </SignedIn>
                    <SignedOut>
                        <Link href="/sign-up">
                            <a>Sign up </a>
                        </Link>
                        or
                        <Link href="/sign-in">
                            <a> Sign in </a>
                        </Link>
                        to get started.
                    </SignedOut>
                </div>
            </main>
        </div>
    );
};

export default Home;