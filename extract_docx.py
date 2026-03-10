import zipfile
import xml.etree.ElementTree as ET
import sys

def extract_text_from_docx(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as docx:
            xml_content = docx.read('word/document.xml')
        tree = ET.fromstring(xml_content)
        
        namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        paragraphs = tree.findall('.//w:p', namespaces)
        for paragraph in paragraphs:
            texts = paragraph.findall('.//w:t', namespaces)
            text = ''.join([t.text for t in texts if t.text])
            if text:
                print(text)
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        extract_text_from_docx(sys.argv[1])
    else:
        print("Provide docx path")
