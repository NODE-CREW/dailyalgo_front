import { BasicModal } from "@components/modal/BasicModal";
import { BasicButton } from "@components/button/BasicButton";
import classNames from "classnames/bind";
import style from "./AgreementModal.module.scss";

type Props = {
  type: "al" | "id";
  isOpen: boolean;
  closeModal: () => void;
  agreementClick: (type: "al" | "id") => void;
};

const cx = classNames.bind(style);

const AgreementModal = ({ type, isOpen, closeModal, agreementClick }: Props) => {
  return (
    <BasicModal isOpen={isOpen} closeModal={closeModal}>
      {type === "al" ? (
        <div className={cx("terms-wrap")}>
          제 1 장 총칙 제 1 조 (목적) 본 약관은 (주)제이피 이노베이션(이하 “회사”라 합니다)이
          운영하는 웹사이트 ‘어반런드렛’ (www.urbanlaunderette.com) (이하 “웹사이트”라 합니다)에서
          제공하는 온라인 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버몰과 이용자의 권리,
          의무 및 책임사항을 규정함을 목적으로 합니다. 제 2 조 (용어의 정의) 본 약관에서 사용하는
          용어는 다음과 같이 정의한다. “웹사이트”란 회사가 재화 또는 용역을 이용자에게 제공하기
          위하여 컴퓨터 등 정보통신설비를 이용하여 재화 또는 용역을 거래 할 수 있도록 설정한 가상의
          영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다. “이용자”란
          “웹사이트”에 접속하여 서비스를 이용하는 회원 및 비회원을 말합니다. “회원”이라 함은
          “웹사이트”에 개인정보를 제공하여 회원등록을 한 자로서, “웹사이트”의 정보를 지속적으로
          제공받으며, “웹사이트”이 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
          “비회원”이라 함은 회원에 가입하지 않고, “웹사이트”이 제공하는 서비스를 이용하는 자를
          말합니다. “ID”라 함은 이용자가 회원가입당시 등록한 사용자 “개인이용문자”를 말합니다.
          “멤버십”이라 함은 회원등록을 한 자로서, 별도의 온/오프라인 상에서 추가 서비스를 제공 받을
          수 있는 회원을 말합니다. 제 3 조 (약관의 공시 및 효력과 변경) 본 약관은 회원가입 화면에
          게시하여 공시하며 회사는 사정변경 및 영업상 중요한 사유가 있을 경우 약관을 변경할 수
          있으며 변경된 약관은 공지사항을 통해 공시한다 본 약관 및 차후 회사사정에 따라 변경된
          약관은 이용자에게 공시함으로써 효력을 발생한다. 제 4 조 (약관 외 준칙) 본 약관에 명시되지
          않은 사항이 전기통신기본법, 전기통신사업법, 정보통신촉진법, ‘전자상거래등에서의 소비자
          보호에 관한 법률’, ‘약관의 규제에관한법률’, ‘전자거래기본법’, ‘전자서명법’, ‘정보통신망
          이용촉진등에 관한 법률’, ‘소비자보호법’ 등 기타 관계 법령에 규정되어 있을 경우에는 그
          규정을 따르도록 한다.
        </div>
      ) : (
        <div className={cx("terms-wrap")}>개인정보약관</div>
      )}

      <div className={cx("footer")}>
        <BasicButton onClick={() => agreementClick(type)}>동의</BasicButton>
        <BasicButton buttonType="third" onClick={closeModal}>
          취소
        </BasicButton>
      </div>
    </BasicModal>
  );
};

export { AgreementModal };
