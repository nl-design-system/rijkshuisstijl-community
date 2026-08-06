const SharedFooter = ({ isLightTheme = false }: { isLightTheme?: boolean }) => (
  <div className={isLightTheme ? 'light' : 'dark'}>hai</div>
);

export default SharedFooter;
