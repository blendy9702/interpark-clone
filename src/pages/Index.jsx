import ContentWrap from "../main/ContentWrap";
import Slide from "../main/Slide";
import "../styles/main.css";

function Index() {
  return (
    <main className="main">
      <div className="inner">
        {/* 메인 상품 슬라이드 */}
        <Slide />

        {/* 투어특가 */}
        <ContentWrap
          title={"투어특가"}
          titleImage={""}
          subtitle="여행전.."
          buText=""
          btLink=""
        >
          <div className="content-cate"></div>
          <div className="content-slide"></div>
        </ContentWrap>

        {/* W트립 */}
        <ContentWrap
          title={"W트립"}
          titleImage={""}
          subtitle="누구와.."
          buText=""
          btLink=""
        >
          <div className="content-slide"></div>
        </ContentWrap>

        {/* 티켓랭크 */}
        <ContentWrap
          title={"티켓랭킹"}
          titleImage={""}
          subtitle="오늘.."
          buText=""
          btLink=""
        >
          <div className="content-cate"></div>
          <div className="content-slide"></div>
        </ContentWrap>

        {/* 인터파크Live */}
        <ContentWrap
          title={"인터파크Live"}
          titleImage={""}
          subtitle=""
          buText=""
          btLink=""
        >
          <div className="content-slide"></div>
        </ContentWrap>
      </div>
    </main>
  );
}

export default Index;
