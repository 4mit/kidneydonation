import Head from "next/head";
import {
  Navbar,
  Button,
  Link,
  Text,
  Card,
  Collapse,
  Radio,
  useTheme,
  Image,
} from "@nextui-org/react";
import { Layout } from "../Component/Layout";
import SimpleSlider from "../Component/Carousel";
import { Payment } from "../Component/Payment";
import { WhatsappShareButton, WhatsappIcon } from "next-share";
import { FacebookShareButton, FacebookIcon } from "next-share";
import { TwitterShareButton, TwitterIcon } from "next-share";
import { LinkedinShareButton, LinkedinIcon } from "next-share";
import CarouselHero from "../Component/CarouselHero";
import { DoctorProfile } from "../Component/DoctorProfile";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Please Help</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="description" content="help live longer" />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        ></meta>
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="donate now and save live"></meta>
        <meta property="og:description" content="urgent help required"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div
          style={{
            position: "fixed",
            top: "50%",
            zIndex: 2,
            right: "16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <WhatsappShareButton
            url={"https://kidneydonation-psi.vercel.app/"}
            title={"Please help share to save life"}
            separator=":: "
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <FacebookShareButton
            url={"https://kidneydonation-psi.vercel.app/"}
            quote={"Please help share to save life"}
            hashtag={"#nextshare"}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={"https://kidneydonation-psi.vercel.app/"}
            title={"Please help share to save life"}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton url={"https://kidneydonation-psi.vercel.app/"}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>
        <Layout css={{ p: 0 }}>
          <Navbar isCompact isBordered>
            <Navbar.Brand>
              <Text b color="error">
                Please Save My Mother
              </Text>
            </Navbar.Brand>
            <Navbar.Content css={{ p: 0 }}>
              <Navbar.Item>
                <Button auto flat as={Link} href="#pay">
                  Donate Now
                </Button>
              </Navbar.Item>
            </Navbar.Content>
          </Navbar>

          <Card>
            <Text
              h1
              css={{
                p: 10,
                fontSize: "3rem",
                textAlign: "center",
                fontWeight: 800,
              }}
              weight="bolder"
            >
              Help My Mother Live Longer With Kidney Transplant.
            </Text>

            {/* <div
              style={{
                minHeight: "30vh",
                borderRadius: 0,
                padding: 5,
                display: "flex",
              }}
            >
              <Image
                width="500px"
                height="500px"
                src="https://kidneydonation.vercel.app/assets/images/A.jpeg"
                alt="Default Image"
              />
            </div> */}
            <CarouselHero />

            <Text
              css={{
                textAlign: "center",
                fontSize: "1.3rem",
                // textGradient: "45deg, $blue900 -20%, $blue900 50%",
              }}
            >
              "It's not the amount that matters but the meaning behind your
              donation"
            </Text>

            <div style={{ padding: 20 }}>
              <Collapse.Group splitted>
                <Collapse
                  bordered
                  title="Overall Required Medical Expenses"
                  expanded
                  style={{ color: "red" }}
                  css={{ color: "blue" }}
                >
                  <Image
                    width="500px"
                    height="500px"
                    style={{ boxShadow: "inset red -1px 0px 8px 4px" }}
                    src=" https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0028.jpg"
                    alt="Default Image"
                  />
                </Collapse>

                <Collapse
                  bordered
                  title="Health Condition Details And Doctor Details"
                >
                  <div
                    role="tabpanel"
                    id="uncontrolled-tab-example-tabpane-home"
                    aria-labelledby="uncontrolled-tab-example-tab-home"
                    class="fade tab-pane active show"
                  >
                    <p>Hello Dear,</p>
                    <div className="flex" style={{ padding: 3 }}>
                      My name is Sunita Yadav and I am writing this post with a
                      heavy heart. Today, I am trying to raise funds for my
                      beloved mother, Leelawati Yadav. She is diagnosed with{" "}
                      <span>End Stage Kidney Disease</span> in March, 2022 and
                      undergoing treatment at{"  "}
                      <Link
                        href="https://sgrh.com/"
                        target="_blank"
                        style={{ display: "inline" }}
                      >
                        Sir Ganga Ram Hospital, Rajinder Nagar, New Delhi -
                        110060, INDIA
                      </Link>
                      <span>
                        {"  "}Her treatment includes very expensive medications,
                        which we are unable to pay for at this point in time.
                      </span>
                    </div>
                    <div>
                      <DoctorProfile />
                    </div>

                    <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
                      My mother sugar level and blood pressure is consistently
                      high for the past few months. She is also having joint and
                      back pain so unable to walk more to reduce the weight. The
                      doctors have suggested us to opt for Kidney Transplant.
                      Based on our discussion with the doctors, we would need
                      approximately<b> 11 Lakhs Indian Rupees</b> to pay for her
                      treatment, which includes the kidney transplant operation,
                      post-operation recovery treatment.
                    </p>
                    <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
                      We have already exhausted our financial resources and do
                      not have enough money to pay for the kidney compatibility
                      tests, kidney transplant and other medical expenses.
                    </p>
                    <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
                      Ours is a middle class family and we have spent all our
                      savings and earnings for my mother’s well-being. My father
                      has spent all the savings for her treatment.Now I am
                      taking care of my mother from my salary which is not
                      enough for her treatment.
                    </p>
                    <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
                      There is nothing more disheartening for a child than to
                      see their parents struggling to make it each day. My
                      mother has protected us from our fears and struggles all
                      her life, and as her kids, it is very painful for me and
                      my sister to watch her suffer with dizziness, tiredness
                      and loss of appetite.
                    </p>
                    <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
                      On my family’s behalf, I request you to contribute towards
                      my mother’s treatment. Your contribution, no matter how
                      big or small, will be a huge blessing for us during this
                      desperate time. Each contribution is important and will be
                      appreciated by us.
                    </p>
                    <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
                      Please help us raise this amount by clicking the Donate
                      button and sharing this page with your friends and family.
                    </p>
                    <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
                      Please remember my mother in your prayers.
                    </p>
                    <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
                      Our family will always be grateful to you for your
                      contribution, prayers and wishes.
                    </p>
                    <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
                      <i>- Thanks for your support .</i>
                    </p>
                  </div>
                </Collapse>
                <Collapse bordered title="Prescriptions & Medical Reports">
                  <SimpleSlider></SimpleSlider>
                </Collapse>
              </Collapse.Group>
            </div>
          </Card>
        </Layout>
        <Layout>
          <div id="pay">
            <Payment></Payment>
          </div>
        </Layout>
      </main>

      <footer className={styles.footer}>
        {" "}
        <b>G Sector 16, Rohini, Delhi 110089</b>
      </footer>
    </div>
  );
}
