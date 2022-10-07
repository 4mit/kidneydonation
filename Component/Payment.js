import { Grid } from "@nextui-org/react";
import { Card, Text } from "@nextui-org/react";
import { Table } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
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
              <Table.Column></Table.Column>
              <Table.Column></Table.Column>
            </Table.Header>

            <Table.Body>
              <Table.Row key="1">
                <Table.Cell>Account Holder Name</Table.Cell>
                <Table.Cell><b>Leelawati Yadav</b></Table.Cell>
              </Table.Row>
              <Table.Row key="2">
                <Table.Cell>Account Number</Table.Cell>
                <Table.Cell>
                  <strong style={{fontWeight: 'bolder'}}>53110100006549</strong>
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
                <Table.Cell><b>9990486780</b></Table.Cell>
              </Table.Row>
              <Table.Row key="1">
                <Table.Cell>UPI ID</Table.Cell>
                <Table.Cell>
                  <a href="yadav.leelawati@axl" target="_blank">
                    yadav.leelawati@axl
                  </a>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </Grid>
      <Grid xs={12} sm={6} md={6} lg={6}>
        <Image
          width="300px"
          height="300px"
          src="https://kidneydonation.vercel.app/assets/images/qr.jpeg"
          alt="Default Image"
          objectFit="contain"
        />
      </Grid>
    </Grid.Container>
  </Card>
);