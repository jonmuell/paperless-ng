import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FILTER_DOCUMENT_TYPE } from 'src/app/data/filter-rule-type';
import { PaperlessDocumentType } from 'src/app/data/paperless-document-type';
import { DocumentListViewService } from 'src/app/services/document-list-view.service';
import { DocumentTypeService } from 'src/app/services/rest/document-type.service';
import { GenericListComponent } from '../generic-list/generic-list.component';
import { DocumentTypeEditDialogComponent } from './document-type-edit-dialog/document-type-edit-dialog.component';

@Component({
  selector: 'app-document-type-list',
  templateUrl: './document-type-list.component.html',
  styleUrls: ['./document-type-list.component.scss']
})
export class DocumentTypeListComponent extends GenericListComponent<PaperlessDocumentType> {

  constructor(service: DocumentTypeService, modalService: NgbModal,
    private router: Router,
    private list: DocumentListViewService
  ) {
    super(service, modalService, DocumentTypeEditDialogComponent)
  }

  getObjectName(object: PaperlessDocumentType) {
    return `document type '${object.name}'`
  }

  filterDocuments(object: PaperlessDocumentType) {
    this.list.documentListView.filter_rules = [
      {rule_type: FILTER_DOCUMENT_TYPE, value: object.id.toString()}
    ]
    this.router.navigate(["documents"])
  }
}
