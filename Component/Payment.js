import { Grid } from "@nextui-org/react";
import { Card, Text } from "@nextui-org/react";
import { Table, Link } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
export const Payment = () => (
  <Card>
    <hr sixe="2" />
    <Text
      color="primary"
      h1
      size={60}
      css={{
        fontSize: "1.52rem",
        padding: "0px 10px",
        margin: "0px 20px",
        textAlign: "center",
      }}
      weight="bold"
    >
      Beneficiary Account Details
    </Text>

    <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={6} md={6} lg={6}>
        <div style={{ width: "100%" }}>
          <Table
            aria-label="Example table with static content"
            css={{
              height: "auto",
              width: "100%",
            }}
          >
            <Table.Header>
              <Table.Column>Colums</Table.Column>
              <Table.Column>Information</Table.Column>
            </Table.Header>

            <Table.Body>
              <Table.Row key="1">
                <Table.Cell>Account Holder Name</Table.Cell>
                <Table.Cell>
                  <b>Leelawati Yadav</b>
                </Table.Cell>
              </Table.Row>
              <Table.Row key="2">
                <Table.Cell>Account Number</Table.Cell>
                <Table.Cell>
                  <strong style={{ fontWeight: "bolder" }}>
                    53110100006549
                  </strong>
                </Table.Cell>
              </Table.Row>
              <Table.Row key="1">
                <Table.Cell>IFSC</Table.Cell>
                <Table.Cell>
                  <b>BARBOROHSEC</b>
                </Table.Cell>
              </Table.Row>
              <Table.Row key="1">
                <Table.Cell>Mobile No</Table.Cell>
                <Table.Cell>
                  <b>9990486780</b>
                </Table.Cell>
              </Table.Row>
              <Table.Row key="1">
                <Table.Cell>UPI link {">>"}</Table.Cell>
                <Table.Cell>
                  <Button
                    as={Link}
                    target="_blank"
                    color="success"
                    rel="noreferrer"
                    href="upi://pay?pa=yadav.leelawati@axl&amp;pn=Leelawati devi&amp;cu=INR"
                  >
                    Donate Now
                  </Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </Grid>
      <Grid xs={12} sm={12} md={12} lg={12} direction="column" justify="center">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            href={"https://kidneydonation.vercel.app/assets/images/qr.jpeg"}
            target="_blank"
          >
            <Image
              width="300px"
              height="300px"
              src="https://kidneydonation.vercel.app/assets/images/qr.jpeg"
              alt="Default Image"
              objectFit="contain"
            />
          </Link>
          <br />
          <Button
            as={Link}
            target="_blank"
            color="success"
            rel="noreferrer"
            href={"https://kidneydonation.vercel.app/assets/images/qr.jpeg"}
          >
            Download QR Code
          </Button>
        </div>
      </Grid>
    </Grid.Container>
  </Card>
);
