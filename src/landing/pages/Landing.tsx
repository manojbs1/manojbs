import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../auth/contexts/AuthProvider";
import LandingLayout from "../components/LandingLayout";


const Landing = () => {
  const { userInfo } = useAuth();
  const { t } = useTranslation();

  return (
    <LandingLayout>
      <main>
        <Box
          sx={{
            py: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h1"
              align="center"
              color="text.primary"
              marginBottom={4}
            >
              {t("landing.title")}
            </Typography>
            <Stack
              sx={{ pt: 3 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {userInfo ? (
                <Button
                  component={RouterLink}
                  to={`/${process.env.PUBLIC_URL}/admin`}
                  variant="contained"
                >
                  {t("landing.cta.mainAuth", { name: userInfo.firstName })}
                </Button>
              ) : (
                <Button
                  component={RouterLink}
                  to={`/${process.env.PUBLIC_URL}/login`}
                  variant="contained"
                >
                  {t("landing.cta.main")}
                </Button>
              )}
            </Stack>
          </Container>
        </Box>
      </main>
    </LandingLayout>
  );
};

export default Landing;
