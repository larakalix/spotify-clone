import { useRouter } from "next/navigation";
import { Formik } from "formik";
import { CiSearch } from "react-icons/ci";

export const SearchBar = () => {
    const { push } = useRouter();

    return (
        <Formik
            initialValues={{ search: "" }}
            onSubmit={({ search }, { setSubmitting }) => {
                setTimeout(() => {
                    push(`/dashboard/search/${search.toLowerCase()}`);
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
                    className="w-full flex flex-wrap rounded-full overflow-hidden bg-white md:min-w-[20rem]"
                >
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center justify-center gap-2 p-22 bg-transparent focus:bg-transparent text-black font-bold rounded-[0.25rem] w-10"
                    >
                        <CiSearch className="w-5 h-5" />
                    </button>

                    <input
                        type="text"
                        name="search"
                        placeholder="What are you looking for?"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="bg-transparent focus:bg-transparent px-4 py-2 flex-1 text-barely-black placeholder:text-gray-400 outline-none focus:outline-none"
                    />
                    {errors.search && touched.search && errors.search}
                </form>
            )}
        </Formik>
    );
};
