import Button from "../../../components/shared/button/Button";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const ContactFrom = () => {
  const contactFormHandle = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    try {
      if (email) {
        emailjs.sendForm("service_iltoq67", "template_imekt2b", e.target, {
          publicKey: "FmZT-ZJq8U9nheb8q",
        });
        toast.success("Successfully send your message!");
        form.reset();
      }
    } catch (error) {
      toast.error("Doesn't send your message", error.text);
    }
  };

  return (
    <div className="flex items-center justify-center mb-36 px-2 ">
      <div
        className=" p-[2px]  rounded-[25px] "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, .07),rgba(23, 23, 23, 1))",
        }}
      >
        <div className="p-[1px]  rounded-[25px] bg-primary-bg-color">
          <div
            className="p-[2px]  rounded-[25px]  justify-center items-center flex "
            style={{
              backgroundImage:
                "linear-gradient(rgba(20, 241, 148, .2), rgba(23, 23, 23, 1))",
            }}
          >
            <div className="rounded-[25px]  justify-start items-start  flex bg-primary-bg-color ">
              <div className="lg:w-[636px] lg:h-[676px] w-fit h-fit pt-9   px-5 ">
                <form onSubmit={contactFormHandle}>
                  <div className="grid md:grid-cols-2 gap-7">
                    {/* first name */}
                    <div>
                      <label
                        htmlFor="name"
                        className=" text-white font-medium pl-2"
                      >
                        First Name *
                      </label>
                      <div
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, rgba(217, 217, 217, 0.03) 0%, rgba(115, 115, 115, 0.03)",
                        }}
                        className="w-full rounded-lg mt-2"
                      >
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="First Name"
                          className="text-white p-3 w-full focus:outline-none rounded-lg bg-transparent  "
                        />
                      </div>
                    </div>
                    {/* last name */}
                    <div>
                      <label
                        htmlFor="name"
                        className=" text-white font-medium pl-2"
                      >
                        Last Name *
                      </label>
                      <div
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, rgba(217, 217, 217, 0.03) 0%, rgba(115, 115, 115, 0.03)",
                        }}
                        className="w-full rounded-lg mt-2"
                      >
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Last Name"
                          className="text-white p-3 w-full focus:outline-none rounded-lg bg-transparent  "
                        />
                      </div>
                    </div>
                  </div>
                  {/* email */}
                  <div className="mt-8">
                    <label
                      htmlFor="name"
                      className=" text-white font-medium pl-2 "
                    >
                      Email *
                    </label>
                    <div
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, rgba(217, 217, 217, 0.03) 0%, rgba(115, 115, 115, 0.03)",
                      }}
                      className="w-full rounded-lg mt-2"
                    >
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="text-white p-3  focus:outline-none rounded-lg bg-transparent w-full "
                      />
                    </div>
                  </div>
                  {/* message box*/}
                  <div className="mt-8 mb-10">
                    <label
                      htmlFor="name"
                      className=" text-white font-medium pl-2 "
                    >
                      Message *
                    </label>
                    <div
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, rgba(217, 217, 217, 0.03) 0%, rgba(115, 115, 115, 0.03)",
                      }}
                      className="w-full rounded-lg mt-2"
                    >
                      <textarea
                        id="message"
                        name="message"
                        type="message"
                        placeholder="message"
                        rows="10"
                        className="text-white p-3  focus:outline-none rounded-lg bg-transparent w-full "
                      />
                    </div>
                  </div>
                  <div className="mb-8">
                    <Button
                      btnName="Contact Us"
                      btnType="submit"
                      classForButton="text-black w-full"
                      bgColor="#14F194"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFrom;
