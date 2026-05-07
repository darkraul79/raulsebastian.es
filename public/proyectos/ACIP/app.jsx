function App() {
  const [page, setPage] = React.useState("home");
  const labels = { home: "01 Home", proyectos: "02 Proyectos", blog: "03 Blog", post: "04 Post" };
  const Page = { home: Home, proyectos: Proyectos, blog: Blog, post: Post }[page];
  return (
    <div data-screen-label={labels[page]}>
      <Nav page={page} onNavigate={setPage} />
      <Page onNavigate={setPage} />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
