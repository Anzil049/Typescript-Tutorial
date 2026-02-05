import React, { useState } from "react";

const TypedForm = () => {

    let [name, setName] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted name:", name);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    onChange={handleChange}
                />

                <button type="submit">Submit</button>

                <p>name:{name}</p>
            </form>
        </>
    )
}

export default TypedForm;