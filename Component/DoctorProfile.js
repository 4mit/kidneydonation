import { Image, Card, Grid } from "@nextui-org/react";

export const DoctorProfile = () => {
  return (
    <>
      <Grid xs={12} sm={12} md={12} lg={12} direction="column" justify="center">
        <Card css={{ mw: "100%", borderRadius: 0 }}>
          <Card.Body>
            <h4>
              Treatment is Observed under : Dr. (Prof ) . A.K. Bhalla Contact :
              09811047377
            </h4>
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

        {/* <Card css={{ borderRadius: 0 }}>
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
        </Card> */}
      </Grid>
    </>
  );
};
