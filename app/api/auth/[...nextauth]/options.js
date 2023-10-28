import GoogleProvider from 'next-auth/providers/google'
import { GoogleProfile } from 'next-auth/providers/google'
import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const options = {
    providers: [
        GoogleProvider({
            // profile(profile) {
            //     console.log(profile);
            //     return {
            //         ...profile,
            //         id: profile.sub,
            //         role: profile.role ?? 'user',
            //     }
            // },
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                // token.role = user.role;
                await connectToDB();
                const sessionUser = await User.findOne({
                    email: user?.email
                });

                token.role = sessionUser.role ?? 'user'
            }
            return token;
        },
        async session({ session, token }) {
            // if (session?.user) {
            //     session.user.role = token.role;
            //     return session;
            // }
            
            await connectToDB();
            const sessionUser = await User.findOne({
                email: session.user.email
            })
    
            session.user.id = sessionUser._id.toString();
            session.user.role = sessionUser.role;
            token.role = sessionUser.role;

            return session;
        },
        async signIn({ profile }) {
            try {
                await connectToDB();
    
                // check if a user already exists
                const userExists = await User.findOne({
                    email: profile.email
                });
    
                // if not, create a new user
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        name: profile.name,
                        image: profile.picture,
                        role: profile.role ?? 'user'
                    })
                }
    
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    },
    
}