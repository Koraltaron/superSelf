function KeyWordsButton({ keywordProp }: { keywordProp: string }) {
  return (
    <>
      <button type="button" value={keywordProp}>
        {keywordProp}
      </button>
    </>
  );
}
export default KeyWordsButton;
