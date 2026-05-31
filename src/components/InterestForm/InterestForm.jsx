import { strings } from '../../i18n/pt-BR';

export default function InterestForm() {
  const { interestForm } = strings;
  return (
    <section id="interestForm">
      <h2>{interestForm.heading}</h2>
      <p>{interestForm.subheading}</p>
      <form>
        <input type="text" placeholder={interestForm.namePlaceholder} required />
        <input type="tel" placeholder={interestForm.phonePlaceholder} required />
        <input type="email" placeholder={interestForm.emailPlaceholder} required />
        <textarea placeholder={interestForm.messagePlaceholder} rows={4} />
        <button type="submit">{interestForm.submitButton}</button>
      </form>
    </section>
  );
}
