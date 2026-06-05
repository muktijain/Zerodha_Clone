import React from "react";

const Faqs = () => {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="mt-5 mb-5">Frequently Asked Questions</h2>
      <div className="faq-item">
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq1"
              >
                What is a Zerodha account?
              </button>
            </h2>

            <div
              id="faq1"
              className="accordion-collapse collapse show"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                A Zerodha account is a combined demat and trading account that
                allows investors to buy, sell, and hold securities digitally.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq2"
              >
                What documents are required to open a demat account?
              </button>
            </h2>

            <div
              id="faq2"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                The following documents are required to open a Zerodha account
                online:
                <ul>
                  <li>PAN number</li>
                  <li>
                    Aadhaar Card (Linked with a phone number for OTP
                    verification)
                  </li>
                  <li>
                    Cancelled cheque or bank account statement (To link your
                    bank account)
                  </li>
                  <li>
                    Income proof (Required only if you wish to trade in Futures
                    & options)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq3"
              >
                Is Zerodha account opening free?
              </button>
            </h2>

            <div
              id="faq3"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">Yes, It is completely free.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq4"
              >
                Are there any AMC (Account Maintenance Charges) for a demat
                account?
              </button>
            </h2>

            <div
              id="faq4"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                There is no AMC for the first year on all new resident
                individual accounts opened from June 1, 2026. From the second
                year, charges depend on the account type.
                <br />
                For Basic Services Demat Account (BSDA): Zero charges on
                holdings up to ₹4 lakh; ₹100/year between ₹4 lakh and ₹10 lakh.
                <br />
                For non-Basic Services Demat Account: ₹300 per year + GST.
                <br />
                To learn more about BSDA,{" "}
                <a className="text-decoration-none">Click here.</a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq5"
              >
                Can I open a demat account without a bank account?
              </button>
            </h2>

            <div
              id="faq5"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                To open a demat account, you must have a bank account in your
                name.
                <br />
                If UPI verification is completed successfully, no proof of bank
                is needed. However, if bank verification fails, <br />
                you'll need to provide either a cancelled cheque or a bank
                statement to link your bank account to Zerodha.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
