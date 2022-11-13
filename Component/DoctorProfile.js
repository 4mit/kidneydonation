import { Image, Card } from "@nextui-org/react";

export const DoctorProfile = () => {
  return (
    <>
      <Card css={{ mw: "400px", borderRadius: 0 }}>
        <Card.Body>
          <h4>Treatment is Observed under : Prof. A.K. Bhalla (09811047377)</h4>
          <Image
            src="/doctor.jpeg"
            alt="Doctor profile"
            style={{
              width: "100%",
              height: 450,
            }}
            objectFit="cover"
          />
        </Card.Body>
      </Card>

      <Card css={{ mw: "400px", borderRadius: 0 }}>
        <Card.Body>
          <h4>Hospital</h4>
          <Image
            src="/hospital.jpeg"
            alt="Doctor profile"
            style={{
              width: "100%",
              height: 450,
            }}
            objectFit="contain"
          ></Image>
        </Card.Body>
      </Card>
    </>
  );
};
