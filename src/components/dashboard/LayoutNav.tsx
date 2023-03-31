"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Formik } from "formik";
import { CiSearch } from "react-icons/ci";
import { useAuthStore } from "@/store/AuthStore";

export const LayoutNav = () => {
    const { logout } = useAuthStore((state) => state);
    const { push } = useRouter();

    const handleLogout = () => {
        logout();
        push("/");
    };

    return (
        <nav className="w-full absolute top-0 z-10">
            <ul className="flex items-center justify-between bg-red-400 py-4 px-8">
                <li>
                    <ul className="flex items-center justify-center gap-4">
                        <li>
                            <Link href="/">
                                <h1>Login</h1>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard">
                                <h1>Rolify</h1>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/search">
                                <h1>Search</h1>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className="flex items-center justify-center gap-4">
                        <li>
                            <Formik
                                initialValues={{ search: "" }}
                                onSubmit={({ search }, { setSubmitting }) => {
                                    setTimeout(() => {
                                        push(`/search/${search.toLowerCase()}`);
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                }) => (
                                    <form
                                        onSubmit={handleSubmit}
                                        className="w-full flex flex-wrap rounded-[0.25rem] overflow-hidden bg-gray-200"
                                    >
                                        <input
                                            type="text"
                                            name="search"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="ex: Sia, Lydia, etc."
                                            className="bg-transparent px-4 py-2 flex-1"
                                        />
                                        {errors.search &&
                                            touched.search &&
                                            errors.search}

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="flex items-center justify-center gap-2 px-2 py-2 bg-blue-500 text-white rounded-[0.25rem] w-10 md:w-[6.25rem]"
                                        >
                                            <CiSearch className="w-5 h-5" />
                                            <span className="hidden md:block">
                                                Submit
                                            </span>
                                        </button>
                                    </form>
                                )}
                            </Formik>
                        </li>
                        <li>
                            <button
                                className="boreder border-green-500 px-4 py-2"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};
