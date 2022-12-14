from glob import glob
import re
import os
import win32com.client as win32
from win32com.client import constants


"""
Get all paths to the files
"""
path = "D:\\CODING\\fall2023\\comp2030\\project\\data\\"
paths = glob(path + "*.doc", recursive=True)


def save_as_docx(path):
    # Opening MS Word
    word = win32.gencache.EnsureDispatch("Word.Application")
    doc = word.Documents.Open(path)
    doc.Activate()

    # Rename path with .docx
    new_file_abs = os.path.abspath(path)
    new_file_abs = re.sub(r"\.\w+$", ".docx", new_file_abs)

    # Save and Close
    word.ActiveDocument.SaveAs(new_file_abs, FileFormat=constants.wdFormatXMLDocument)
    doc.Close(False)


for path in paths:
    save_as_docx(path)
