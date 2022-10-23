import { FormInput, FormSubmitButton } from "@components";

export default function MyComponent(opinion) {
  return (
    <>
      <FormInput
        type="text"
        placeholder=""
        required={false}
        value={opinion}
      />
      <FormSubmitButton
        text="Add new opinion"
       
      />
    </>
  );
}

//tu codes dans l'exo 5.1 hein
//oops
