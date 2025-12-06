import { Box, Button, Container, Typography, Grid, Paper } from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";

export default function Home() {
  const featureSectionItems = [
    {
      icon: <FolderOpenIcon sx={{ fontSize: "40px" }} />,
      title: "コレクション管理",
      text: "お気に入りのレコードを整理・閲覧しよう。",
    },
    {
      icon: <FavoriteBorderIcon sx={{ fontSize: "40px" }} />,
      title: "シェア・フォロー",
      text: "好きなコレクターをフォローしよう。",
    },
    {
      icon: <PhotoCameraOutlinedIcon sx={{ fontSize: "40px" }} />,
      title: "デジタルアーカイブ",
      text: "写真やメモでレコードを記録しよう。",
    },
  ];
  return (
    <>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
          px: 5,
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: "26px" }}>recocolle</Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography sx={{ cursor: "pointer" }}>Browse</Typography>
          <Typography sx={{ cursor: "pointer" }}>My Collection</Typography>
          <Typography sx={{ cursor: "pointer" }}>Login</Typography>
        </Box>
      </Box>

      {/* Hero Section */}
      <Container maxWidth="md" sx={{ textAlign: "center", mt: "48px", mb: "42px" }}>
        <Box
          sx={{
            height: "260px",
            width: "260px",
            backgroundImage: "url('/main-image.png')",
            backgroundSize: "cover",
            opacity: 0.9,
            borderRadius: "50%",
            mx: "auto",
            mb: "24px",
          }}
        />

        <Typography variant="h3" fontWeight={700} gutterBottom>
          YOUR MUSIC.
          <br />
          YOUR STORY.
        </Typography>

        <Typography color="text.secondary" sx={{ mb: "32px" }}>
          レコードコレクションを整理し、 世界中の音楽好きと共有しよう。
        </Typography>

        <Button
          variant="contained"
          sx={{
            background: "#000",
            px: "32px",
            py: "12px",
            fontSize: "16px",
            borderRadius: 2,
            "&:hover": { background: "#333" },
          }}
        >
          Start Now
        </Button>
      </Container>

      {/* Feature Section */}
      <Container maxWidth="lg" sx={{ mb: "96px" }}>
        <Grid container spacing={4}>
          {featureSectionItems.map((item, i) => (
            <Grid key={i}>
              <Paper
                sx={{
                  p: "32px",
                  textAlign: "center",
                  borderRadius: 3,
                  boxShadow: "0px 4px 16px rgba(0,0,0,0.06)",
                }}
              >
                {item.icon}
                <Typography variant="h6" sx={{ mt: "16px", mb: "8px" }}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">{item.text}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ textAlign: "center", mb: "80px" }}>
        <Typography sx={{ mb: 3 }}>音楽好きのコミュニティに参加しませんか？</Typography>

        <Button
          variant="contained"
          sx={{
            background: "#000",
            px: "40px",
            py: "12px",
            fontSize: "16px",
            borderRadius: 2,
            "&:hover": { background: "#333" },
          }}
        >
          Sign Up Free
        </Button>
      </Box>

      {/* Footer */}
      <Box sx={{ borderTop: "1px solid #eee", py: "32px", px: "40px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontWeight={500}>recocolle</Typography>

          <Box sx={{ display: "flex", gap: 3, cursor: "pointer" }}>
            <Typography>About</Typography>
            <Typography>Contact</Typography>
            <Typography>Terms</Typography>
            <Typography>Privacy</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
