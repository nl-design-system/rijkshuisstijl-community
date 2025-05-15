import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColumnLayoutComponent } from './column-layout.component';
import { HeadingComponent } from '../heading/heading.component';
import { ParagraphComponent } from '../paragraph/paragraph.component';

@Component({
  template: `
    <rhc-column-layout [rule]="rule">
      <rhc-heading [level]="2">Column layout</rhc-heading>
      <rhc-paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum magnam magni expedita modi sit quasi, natus
        nobis sint hic, eum illum quis laboriosam pariatur quo alias eaque qui quae recusandae?
      </rhc-paragraph>
    </rhc-column-layout>
  `,
  imports: [ColumnLayoutComponent, HeadingComponent, ParagraphComponent],
})
class ColumnLayoutWithChildren {
  @Input() rule?: boolean = false;
}

describe('ColumnLayout with children', () => {
  let component: ColumnLayoutWithChildren;
  let fixture: ComponentFixture<ColumnLayoutWithChildren>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnLayoutWithChildren],
    }).compileComponents();

    fixture = TestBed.createComponent(ColumnLayoutWithChildren);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply the correct css class to the column layout element', () => {
    const columnLayout = fixture.nativeElement.querySelector('rhc-column-layout > div');
    expect(columnLayout).toHaveClass('utrecht-column-layout');
    expect(columnLayout).not.toHaveClass('utrecht-column-layout--rule');
  });

  it('should apply the utrecht-column-layout--rule class if the rule prop is set', () => {
    component.rule = true;
    fixture.detectChanges();
    const columnLayout = fixture.nativeElement.querySelector('rhc-column-layout > div');
    expect(columnLayout).toHaveClass('utrecht-column-layout');
    expect(columnLayout).toHaveClass('utrecht-column-layout--rule');
  });
});
