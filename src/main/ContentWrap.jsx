const ContentWrap = ({
  children,
  title,
  subtitle,
  buText,
  btLink,
  titleImage,
}) => {
  return (
    <div className="content-wrap">
      <h2>{titleImage === "" ? title : <img src={titleImage} />}</h2>
      <p>{subtitle}</p>
      {children}
      <div className="content-link">
        <a href={btLink}>{buText}</a>
      </div>
    </div>
  );
};

export default ContentWrap;
